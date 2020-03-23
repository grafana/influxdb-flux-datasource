import { DataSourceInstanceSettings } from "@grafana/data";
import { DataSourceWithBackend } from "@grafana/runtime";

import { InfluxQuery, InfluxOptions } from "./types";

export class DataSource extends DataSourceWithBackend<
  InfluxQuery,
  InfluxOptions
> {
  constructor(instanceSettings: DataSourceInstanceSettings<InfluxOptions>) {
    super(instanceSettings);
  }
}
