import { DataQuery, DataSourceJsonData } from '@grafana/data';

export interface InfluxQuery extends DataQuery {
  query?: string;
}

export interface InfluxOptions extends DataSourceJsonData {
  organization?: string;
}

export interface InfluxSecureJsonData {
  token?: string;
}
