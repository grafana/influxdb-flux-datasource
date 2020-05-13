import React, { PureComponent } from 'react';
import { QueryEditorProps } from '@grafana/data';
import Editor from '@monaco-editor/react';
import { DataSource } from '../DataSource';
import { InfluxQuery, InfluxOptions } from '../types';
// import('@influxdata/flux-lsp-browser').then(({ Server }) => {
//   const srv = new Server(false, true);
//   console.log('lsp server ready', srv);
// });

type Props = QueryEditorProps<DataSource, InfluxQuery, InfluxOptions>;

export class QueryEditor extends PureComponent<Props> {
  getEditorValue: any | undefined;
  onRawQueryChange = () => {
    this.props.onChange({
      ...this.props.query,
      query: this.getEditorValue(),
    });
  };

  onEditorDidMount = (getEditorValue: any) => {
    this.getEditorValue = getEditorValue;
    //monaco.languages.register({ id: 'flux' });
    // monaco.languages.setMonarchTokensProvider('flux', {
    //   keywords: ['from', 'range', 'filter', 'to'],
    //   tokenizer: {
    //     root: [
    //       [
    //         /[a-z_$][\w$]*/,
    //         {cases: {'@keywords': 'keyword', '@default': 'identifier'}},
    //       ],
    //     ],
    //   },
    // })
  };

  render() {
    const { query } = this.props;
    return (
      <>
        <div onBlur={this.onRawQueryChange}>
          <Editor
            height={'300px'}
            language="flux"
            value={query.query}
            editorDidMount={this.onEditorDidMount}
            theme={'dark'}
          />
        </div>
      </>
    );
  }
}
