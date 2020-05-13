import React, { PureComponent, ChangeEvent } from 'react';
import {
  DataSourcePluginOptionsEditorProps,
  onUpdateDatasourceJsonDataOption,
  onUpdateDatasourceResetOption,
  onUpdateDatasourceSecureJsonDataOption,
} from '@grafana/data';
import { InfluxOptions, InfluxSecureJsonData } from '../types';
import { DataSourceHttpSettings, InlineFormLabel, Input, Button } from '@grafana/ui';

export type Props = DataSourcePluginOptionsEditorProps<InfluxOptions, InfluxSecureJsonData>;

export class ConfigEditor extends PureComponent<Props> {
  onURLChange = (event: ChangeEvent<any>) => {
    this.props.onOptionsChange({
      ...this.props.options,
      url: event.target.value,
    });
  };

  onMaxSeriesChange = (event: ChangeEvent<any>) => {
    const { options } = this.props;
    this.props.onOptionsChange({
      ...options,
      jsonData: {
        ...options.jsonData,
        maxSeries: +event.target.value,
      },
    });
  };

  render() {
    const { options, onOptionsChange } = this.props;
    const secureJsonData = options.secureJsonData || {};
    const jsonData = options.jsonData || {};
    const tokenConfigured = options?.secureJsonFields?.token === true;

    return (
      <>
        {false && (
          <DataSourceHttpSettings
            defaultUrl={'...'}
            dataSourceConfig={options}
            showAccessOptions={false}
            onChange={onOptionsChange}
          />
        )}

        <div className="gf-form-inline">
          <div className="gf-form max-width-30">
            <InlineFormLabel className="width-10" tooltip="Influx URL">
              URL
            </InlineFormLabel>
            <div style={{ flexGrow: 1 }}>
              <Input type="text" placeholder="https://..." value={options.url || ''} onChange={this.onURLChange} />
            </div>
          </div>
        </div>

        <div className="gf-form-inline">
          <div className="gf-form max-width-30">
            <InlineFormLabel className="width-10" tooltip="The orginization id">
              Organization
            </InlineFormLabel>
            <div style={{ flexGrow: 1 }}>
              <Input
                type="text"
                placeholder="your org id"
                value={jsonData.organization || ''}
                onChange={onUpdateDatasourceJsonDataOption(this.props, 'organization')}
              />
            </div>
          </div>
        </div>
        <div className="gf-form-inline">
          <div className="gf-form max-width-30">
            <InlineFormLabel className="width-10" tooltip="The default bucket to read from">
              Default Bucket
            </InlineFormLabel>
            <div style={{ flexGrow: 1 }}>
              <Input
                type="text"
                placeholder="The default bucket to read from"
                value={jsonData.defaultBucket || ''}
                onChange={onUpdateDatasourceJsonDataOption(this.props, 'defaultBucket')}
              />
            </div>
          </div>
        </div>
        <div className="gf-form-inline">
          <div className="gf-form max-width-30">
            <InlineFormLabel className="width-10" tooltip="Maximum number of series to return">
              Max Series
            </InlineFormLabel>
            <div style={{ flexGrow: 1 }}>
              <Input
                type="number"
                placeholder="50"
                value={jsonData.maxSeries || ''}
                onChange={this.onMaxSeriesChange}
              />
            </div>
          </div>
        </div>
        <div className="gf-form-inline">
          <div className="gf-form max-width-30">
            <InlineFormLabel className="width-10" tooltip="The orginization id">
              Token
            </InlineFormLabel>
            <div style={{ flexGrow: 1 }}>
              {tokenConfigured ? (
                <Input className="width-20" placeholder="saved" disabled={true} />
              ) : (
                <Input
                  className="width-20"
                  value={secureJsonData.token ?? ''}
                  placeholder="Token"
                  required
                  onChange={onUpdateDatasourceSecureJsonDataOption(this.props, 'token')}
                />
              )}
            </div>
            {tokenConfigured && (
              <div className="gf-form">
                <div className="max-width-30 gf-form-inline">
                  <Button
                    variant="secondary"
                    type="button"
                    onClick={onUpdateDatasourceResetOption(this.props, 'token')}
                  >
                    reset
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}
