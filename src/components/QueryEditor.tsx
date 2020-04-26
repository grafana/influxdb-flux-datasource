import React, { PureComponent, ChangeEvent } from 'react';
import { QueryEditorProps } from '@grafana/data';
import { TextArea } from '@grafana/ui';
import { DataSource } from '../DataSource';
import { InfluxQuery, InfluxOptions } from '../types';

type Props = QueryEditorProps<DataSource, InfluxQuery, InfluxOptions>;

export class QueryEditor extends PureComponent<Props> {
  onRawQueryChange = (event: ChangeEvent<any>) => {
    this.props.onChange({
      ...this.props.query,
      query: event.target.value,
    });
  };

  render() {
    const { query } = this.props;
    return (
      <>
        <div>
          <TextArea rows={10} value={query.query} onChange={this.onRawQueryChange} placeholder="RAW Query" />
        </div>
      </>
    );
  }
}
