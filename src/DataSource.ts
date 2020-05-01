import { DataSourceInstanceSettings, MetricFindValue, DataQueryResponse, DataQueryRequest } from '@grafana/data';
import { DataSourceWithBackend } from '@grafana/runtime';
import { Observable } from 'rxjs';

import { InfluxQuery, InfluxOptions } from './types';

export class DataSource extends DataSourceWithBackend<InfluxQuery, InfluxOptions> {
  /** @ngInject */
  instance: DataSourceInstanceSettings<InfluxOptions>;
  constructor(instanceSettings: DataSourceInstanceSettings<InfluxOptions>, private templateSrv: any) {
    super(instanceSettings);
    this.instance = instanceSettings;
  }

  query(request: DataQueryRequest<InfluxQuery>): Observable<DataQueryResponse> {
    request.targets.forEach((target: InfluxQuery, i: number) => {
      request.targets[i] = {
        ...target,
        options: this.instance.jsonData,
      };
    });

    console.log('request', request);

    return DataSourceWithBackend.prototype.query.call(this, request);
  }

  async metricFindQuery?(query: any, options?: any): Promise<MetricFindValue[]> {
    return Promise.resolve([]);
  }

  applyTemplateVariables(query: InfluxQuery): InfluxQuery {
    if (!query || !query.query) {
      return query;
    }

    return {
      ...query,
      query: this.templateSrv.replace(query.query),
    };
  }
}
