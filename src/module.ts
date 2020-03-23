import { DataSourcePlugin } from "@grafana/data";
import { DataSource } from "./DataSource";
import { QueryEditor, ConfigEditor } from "./components";
import { InfluxQuery, InfluxOptions } from "./types";

export const plugin = new DataSourcePlugin<
  DataSource,
  InfluxQuery,
  InfluxOptions
>(DataSource)
  .setConfigEditor(ConfigEditor)
  .setQueryEditor(QueryEditor);
