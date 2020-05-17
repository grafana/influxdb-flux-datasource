import { DataSourceInstanceSettings, MetricFindValue, DataQueryRequest, DataQueryResponse } from '@grafana/data';
import { DataSourceWithBackend, getTemplateSrv } from '@grafana/runtime';
import { InfluxQuery, InfluxOptions } from './types';
import { Observable } from 'rxjs';

export class DataSource extends DataSourceWithBackend<InfluxQuery, InfluxOptions> {
  constructor(private instanceSettings: DataSourceInstanceSettings<InfluxOptions>) {
    super(instanceSettings);
  }

  query(request: DataQueryRequest<InfluxQuery>): Observable<DataQueryResponse> {
    // Why? This is needed otherwise options never get passed into the query (ex: v.bucket)
    request.targets.forEach((target: InfluxQuery, i: number) => {
      request.targets[i] = {
        ...target,
        options: this.instanceSettings.jsonData,
      };
    });

    return super.query.call(this, request);
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
      query: getTemplateSrv().replace(query.query),
    };
  }
}
