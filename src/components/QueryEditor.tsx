import React, { PureComponent, ChangeEvent } from "react";
import { QueryEditorProps } from "@grafana/data";
import { FormLabel, Switch } from "@grafana/ui";
import { DataSource } from "../DataSource";
import { InfluxQuery, InfluxOptions } from "../types";

type Props = QueryEditorProps<DataSource, InfluxQuery, InfluxOptions>;

export class QueryEditor extends PureComponent<Props> {
  onRawQueryChange = (event: ChangeEvent<any>) => {
    this.props.onChange({
      ...this.props.query,
      rawQuery: event.target.value
    });
  };

  toggleNoTruncation = (event?: React.SyntheticEvent<HTMLInputElement>) => {
    const { query, onChange, onRunQuery } = this.props;
    onChange({
      ...query,
      noTruncation: !query.noTruncation
    });
    onRunQuery();
  };

  render() {
    const { query } = this.props;
    return (
      <>
        <div className="gf-form-inline">
          <FormLabel
            width={10}
            className="query-keyword"
            tooltip={
              <p>
                The <code>spreadsheetId</code> is used to identify which
                spreadsheet is to be accessed or altered. This ID is the value
                between the "/d/" and the "/edit" in the URL of your
                spreadsheet.
              </p>
            }
          >
            Raw Query
          </FormLabel>
          <div className="gf-form gf-form--grow">
            <div className="gf-form-label gf-form-label--grow" />
          </div>
        </div>
        <div>
          <textarea
            className="gf-form-input"
            rows={10}
            value={query.rawQuery}
            onChange={this.onRawQueryChange}
            placeholder="RAW Query"
          />
        </div>
        <div className="gf-form-inline">
          <Switch
            label="Allow Truncation"
            tooltip="Return data (with a warning) when more than 1mb data is return"
            labelClass={"width-10  query-keyword"}
            checked={!(query.noTruncation === true)}
            onChange={this.toggleNoTruncation}
          />
          <div className="gf-form gf-form--grow">
            <div className="gf-form-label gf-form-label--grow" />
          </div>
        </div>
      </>
    );
  }
}
