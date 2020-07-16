import React, { PureComponent } from 'react';
import { QueryEditorProps, SelectableValue } from '@grafana/data';
import Editor from '@monaco-editor/react';
import { DataSource } from '../DataSource';
import { InfluxQuery, InfluxOptions } from '../types';
import { Select, LinkButton, InlineFormLabel } from '@grafana/ui';
// import('@influxdata/flux-lsp-browser').then(({ Server }) => {
//   const srv = new Server(false, true);
//   console.log('lsp server ready', srv);
// });

type Props = QueryEditorProps<DataSource, InfluxQuery, InfluxOptions>;

const samples: Array<SelectableValue<string>> = [
  { label: 'Show buckets', description: 'List the avaliable buckets (table)', value: 'buckets()' },
  {
    label: 'Simple query',
    description: 'filter by measurment and field',
    value: `from(bucket: "db/rp")
  |> range(start: v.timeRangeStart, stop:v.timeRangeStop)
  |> filter(fn: (r) =>
    r._measurement == "example-measurement" and
    r._field == "example-field"
  )`,
  },
  {
    label: 'Grouped Query',
    description: 'Group by (min/max/sum/median)',
    value: `// v.windowPeriod is a variable referring to the current optimized window period (currently: $interval)
from(bucket: v.bucket)
  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
  |> filter(fn: (r) => r["_measurement"] == "measurement1" or r["_measurement"] =~ /^.*?regex.*$/)
  |> filter(fn: (r) => r["_field"] == "field2" or r["_field"] =~ /^.*?regex.*$/)
  |> aggregateWindow(every: v.windowPeriod, fn: mean|median|max|count|derivative|sum)
  |> yield(name: "some-name")`,
  },
  {
    label: 'Filter by value',
    description: 'Results between a min/max',
    value: `// v.bucket, v.timeRangeStart, and v.timeRange stop are all variables supported by the flux plugin and influxdb
from(bucket: v.bucket)
  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
  |> filter(fn: (r) => r["_value"] >= 10 and r["_value"] <= 20)`,
  },
  {
    label: 'Schema Exploration: (measurements)',
    description: 'Get a list of measurement using flux',
    value: `import "influxdata/influxdb/v1"
v1.measurements(bucket: v.bucket)`,
  },
  {
    label: 'Schema Exploration: (fields)',
    description: 'Return every possible key in a single table',
    value: `from(bucket: v.bucket)
  |> range(start: -30m)
  |> keys()
  |> keep(columns: ["_value"])
  |> group()
  |> distinct()`,
  },
  {
    label: 'Schema Exploration: (tag keys)',
    description: 'Get a list of tag keys using flux',
    value: `import "influxdata/influxdb/v1"
v1.tagKeys(bucket: v.bucket)`,
  },
  {
    label: 'Schema Exploration: (tag values)',
    description: 'Get a list of tag values using flux',
    value: `import "influxdata/influxdb/v1"

v1.tagValues(
    bucket: v.bucket,
    tag: "host",
    predicate: (r) => true,
    start: -1d
)`,
  },
];

export class QueryEditor extends PureComponent<Props> {
  getEditorValue: any | undefined;

  onRawQueryChange = () => {
    this.props.onChange({
      ...this.props.query,
      query: this.getEditorValue(),
    });
    this.props.onRunQuery();
  };

  onEditorDidMount = (getEditorValue: any) => {
    this.getEditorValue = getEditorValue;
  };

  onSampleChange = (val: SelectableValue<string>) => {
    this.props.onChange({
      ...this.props.query,
      query: val.value!,
    });
    this.props.onRunQuery();
  };

  render() {
    const { query } = this.props;
    return (
      <div>
        <div onBlur={this.onRawQueryChange}>
          <Editor
            height={'250px'}
            language="flux"
            value={query.query}
            editorDidMount={this.onEditorDidMount}
            theme={'dark'}
          />
        </div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <InlineFormLabel width={6} tooltip="This supports queries copied from chronograph">
              Help
            </InlineFormLabel>
            <Select width={20} options={samples} placeholder="Sample Query" onChange={this.onSampleChange} />
            <LinkButton
              icon="external-link-alt"
              variant="secondary"
              href="https://docs.influxdata.com/flux/latest/introduction/getting-started/"
            >
              Flux Docs
            </LinkButton>
          </div>
        </div>
      </div>
    );
  }
}
