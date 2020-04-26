import { DataSourceInstanceSettings, MetricFindValue } from '@grafana/data';
import { DataSourceWithBackend } from '@grafana/runtime';

import { InfluxQuery, InfluxOptions } from './types';

export class DataSource extends DataSourceWithBackend<InfluxQuery, InfluxOptions> {
  /** @ngInject */
  constructor(instanceSettings: DataSourceInstanceSettings<InfluxOptions>, private templateSrv: any) {
    super(instanceSettings);
  }

  async metricFindQuery?(query: any, options?: any): Promise<MetricFindValue[]> {
    return Promise.resolve([]);
  }

  applyTemplateVariables(query: InfluxQuery): InfluxQuery {
    return {
      ...query,
      query: this.templateSrv.replace(query),
    };
  }
}
