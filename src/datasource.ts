import _ from 'lodash';

import * as dateMath from 'grafana/app/core/utils/datemath';

import {
  getAnnotationsFromResult,
  getTableModelFromResult,
  getTimeSeriesFromResult,
  getValuesFromResult,
  parseResults,
} from './response_parser';
import expandMacros from './metric_find_query';

const MAX_SERIES = 20;
export default class InfluxDatasource {
  type: string;
  url: string;
  username: string;
  password: string;
  name: string;
  bucket: any;
  basicAuth: any;
  withCredentials: any;
  interval: any;
  supportAnnotations: boolean;
  supportMetrics: boolean;

  /** @ngInject */
  constructor(instanceSettings, private backendSrv, private templateSrv) {
    this.type = 'influxdb-flux';
    this.url = instanceSettings.url.trim();

    this.username = instanceSettings.username;
    this.password = instanceSettings.password;
    this.name = instanceSettings.name;
    this.basicAuth = instanceSettings.basicAuth;
    this.withCredentials = instanceSettings.withCredentials;
    this.interval = (instanceSettings.jsonData || {}).timeInterval;
    this.bucket = (instanceSettings.jsonData || {}).bucket;
    this.supportAnnotations = true;
    this.supportMetrics = true;
  }

  prepareQueryTarget(target, options) {
    // Replace grafana variables
    const timeFilter = this.getTimeFilter(options);
    options.scopedVars.range = {value: timeFilter};
    const interpolated = this.templateSrv.replace(target.query, options.scopedVars);
    return {
      ...target,
      query: interpolated,
    };
  }

  query(options) {
    const queryTargets = options.targets
      .filter(target => target.query)
      .map(target => this.prepareQueryTarget(target, options));
    if (queryTargets.length === 0) {
      return Promise.resolve({data: []});
    }

    const queries = queryTargets.map(target => {
      const {query, resultFormat} = target;

      if (resultFormat === 'table') {
        return this._seriesQuery(query, options)
          .then(response => parseResults(response.data))
          .then(results => results.map(getTableModelFromResult));
      } else {
        return this._seriesQuery(query, options)
          .then(response => parseResults(response.data))
          .then(results => results.map(getTimeSeriesFromResult));
      }
    });

    return Promise.all(queries).then((series: any) => {
      let seriesList = _.flattenDeep(series).slice(0, MAX_SERIES);
      return {data: seriesList};
    });
  }

  annotationQuery(options) {
    if (!options.annotation.query) {
      return Promise.reject({
        message: 'Query missing in annotation definition',
      });
    }

    const {query} = options.annotation;
    const queryOptions = {
      scopedVars: {},
      ...options,
      silent: true,
    };
    const target = this.prepareQueryTarget({query}, queryOptions);

    return this._seriesQuery(target.query, queryOptions).then(response => {
      const results = parseResults(response.data);
      if (results.length === 0) {
        throw {message: 'No results in response from InfluxDB'};
      }
      const annotations = _.flatten(
        results.map(result => getAnnotationsFromResult(result, options.annotation))
      );
      return annotations;
    });
  }

  metricFindQuery(query: string, options?: any) {
    const interpreted = expandMacros(query);

    // Use normal querier in silent mode
    const queryOptions = {
      rangeRaw: {to: 'now', from: 'now - 1h'},
      scopedVars: {},
      ...options,
      silent: true,
    };
    const target = this.prepareQueryTarget({query: interpreted}, queryOptions);
    return this._seriesQuery(target.query, queryOptions).then(response => {
      const results = parseResults(response.data);
      const values = _.uniq(_.flatten(results.map(getValuesFromResult)));
      return values
        .filter(value => value && value[0] !== '_') // Ignore internal fields
        .map(value => ({text: value}));
    });
  }

  _seriesQuery(query: string, options?: any) {
    if (!query) {
      return Promise.resolve({data: ''});
    }
    return this._influxRequest('POST', '/api/v2/query', {query: query}, options);
  }

  testDatasource() {
    const query = `from(bucket:"${this.bucket}") 
        |> range(start:-10y) 
        |> last()`;
    if (this.bucket.indexOf('/') < 0) {
      return Promise.resolve({
        status: 'error',
        message: 'The bucket is missing a retention policy',
      });
    }

    return this._influxRequest('POST', '/api/v2/query', {query: query})
      .then(res => {
        if (res && res.data && res.data.trim()) {
          return {
            status: 'success',
            message: 'Data source connected and database found.',
          };
        }
        return {
          status: 'error',
          message:
            'Data source connected, but has no data. Verify the "bucket" field and make sure the bucket has data.',
        };
      })
      .catch(err => {
        return {status: 'error', message: err.message};
      });
  }

  _influxRequest(method: string, url: string, data: any, options?: any) {
    let params: any = {};

    if (this.username) {
      params.u = this.username;
      params.p = this.password;
    }

    let req: any = {
      method: method,
      url: this.url + url,
      params: params,
      data: data,
      precision: 'ms',
      inspect: {type: this.type},
    };

    req.headers = {
      Accept: 'application/csv',
    };

    if (this.basicAuth || this.withCredentials) {
      req.withCredentials = true;
    }
    if (this.basicAuth) {
      req.headers.Authorization = this.basicAuth;
    }

    return this.backendSrv.datasourceRequest(req).then(
      result => {
        return result;
      },
      function(err) {
        if (err.status !== 0 || err.status >= 300) {
          if (err.data && err.data.error) {
            throw {
              message: 'InfluxDB Error: ' + err.data.error,
              data: err.data,
              config: err.config,
            };
          } else {
            throw {
              message: 'Network Error: ' + err.statusText + '(' + err.status + ')',
              data: err.data,
              config: err.config,
            };
          }
        }
      }
    );
  }

  getTimeFilter(options) {
    const from = this.getInfluxTime(options.rangeRaw.from, false);
    const to = this.getInfluxTime(options.rangeRaw.to, true);
    if (to === 'now') {
      return `start: ${from}`;
    }
    return `start: ${from}, stop: ${to}`;
  }

  getInfluxTime(date, roundUp) {
    if (_.isString(date)) {
      if (date === 'now') {
        return date;
      }

      const parts = /^now\s*-\s*(\d+)([d|h|m|s])$/.exec(date);
      if (parts) {
        const amount = parseInt(parts[1]);
        const unit = parts[2];
        return '-' + amount + unit;
      }
      date = dateMath.parse(date, roundUp);
    }

    return date.toISOString();
  }
}
