import { DataQuery, DataSourceJsonData } from "@grafana/data";

export interface InfluxQuery extends DataQuery {
  rawQuery?: string;
  noTruncation?: boolean;
}

export interface InfluxOptions extends DataSourceJsonData {
  // nothing for now
}

export interface InfluxSecureJsonData {
  // nothing for now
}
