import React, { PureComponent } from 'react';
import { DataSourcePluginOptionsEditorProps } from '@grafana/data';
import { InfluxOptions, InfluxSecureJsonData } from '../types';
import { DataSourceHttpSettings } from '@grafana/ui';

export type Props = DataSourcePluginOptionsEditorProps<InfluxOptions, InfluxSecureJsonData>;

export class ConfigEditor extends PureComponent<Props> {
  render() {
    const { options, onOptionsChange } = this.props;
    return (
      <>
        <DataSourceHttpSettings
          defaultUrl={'...'}
          dataSourceConfig={options}
          showAccessOptions={false}
          onChange={onOptionsChange}
        />
      </>
    );
  }
}
