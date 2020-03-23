import React, { PureComponent } from "react";
import { DataSourcePluginOptionsEditorProps } from "@grafana/data";
import { InfluxOptions, InfluxSecureJsonData } from "../types";

export type Props = DataSourcePluginOptionsEditorProps<
  InfluxOptions,
  InfluxSecureJsonData
>;

export class ConfigEditor extends PureComponent<Props> {
  onResetApiKey = () => {
    const { options } = this.props;
    this.props.onOptionsChange({
      ...options,
      secureJsonData: {
        ...options.secureJsonData,
        apiKey: ""
      },
      secureJsonFields: {
        ...options.secureJsonFields,
        apiKey: false
      }
    });
  };

  render() {
    return <div className="gf-form-group">TODO....</div>;
  }
}
