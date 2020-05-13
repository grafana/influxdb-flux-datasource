import { DataSourceInstanceSettings, MetricFindValue } from '@grafana/data';
import { DataSourceWithBackend, getTemplateSrv } from '@grafana/runtime';
import { InfluxQuery, InfluxOptions } from './types';

export class DataSource extends DataSourceWithBackend<InfluxQuery, InfluxOptions> {
  constructor(instanceSettings: DataSourceInstanceSettings<InfluxOptions>) {
    super(instanceSettings);
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
