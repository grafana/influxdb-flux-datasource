import { DataQuery, DataSourceJsonData } from '@grafana/data';

export interface InfluxQuery extends DataQuery {
  query?: string;
  options?: InfluxOptions;
}

export interface InfluxOptions extends DataSourceJsonData {
  organization?: string;
  defaultBucket?: string;
}

export interface InfluxSecureJsonData {
  token?: string;
}
