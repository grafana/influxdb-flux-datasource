import React, { Component } from 'react';

import { react2AngularDirective } from 'app/core/utils/react2angular';

import FluxQueryField from './FluxQueryField';
import flux from './flux';

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
    const { database, request } = this.props;
    const { edited, query } = this.state;

    return (
      <div className="gf-form-input">
        <FluxQueryField
          defaultDatabase={database}
          initialQuery={edited ? null : query}
          onPressEnter={this.handlePressEnter}
          onQueryChange={this.handleChangeQuery}
          prismLanguage="python"
          prismDefinition={flux}
          placeholder="Enter a FLUX query"
          request={request}
        />
      </div>
    );
  }
}

react2AngularDirective('fluxEditor', Editor, ['change', 'database', 'execute', 'query', 'request']);
