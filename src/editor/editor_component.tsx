import React, { Component } from 'react';

import coreModule from 'grafana/app/core/core_module';

import FluxMonacoEditor from './FluxMonacoEditor';

/**
 * Angular wrapper around the FLux query field
 */
class Editor extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      edited: false,
      query: props.query || '',
    };
  }

  handleChangeQuery = value => {
    const { index, change } = this.props;
    const { query } = this.state;
    const edited = query !== value;
    this.setState({ edited, query: value });
    if (change) {
      change(value, index);
    }
  };

  handlePressEnter = () => {
    const { execute } = this.props;
    if (execute) {
      execute();
    }
  };

  render() {
    //const { database, request } = this.props;
    const { edited, query } = this.state;

    return (
      <div className="gf-form-input" style={{ height: 'initial' }}>
        <FluxMonacoEditor
          script={edited ? null : query}
          onChangeScript={this.handleChangeQuery}
        />
      </div>
    );
  }
}

coreModule.directive('fluxEditor', [
  'reactDirective',
  (reactDirective: any) => {
    return reactDirective(Editor, ['change', 'database', 'execute', 'query', 'request']);
  },
]);
