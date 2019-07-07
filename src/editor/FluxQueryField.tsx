import Plain from 'slate-plain-serializer';

import QueryField, { getInitialValue, makeFragment } from './QueryField';
import debounce from './utils/debounce';
import { getNextCharacter, getPreviousCousin } from './utils/dom';

import { FUNCTIONS } from './flux';
import '../styles.css';


interface Suggestion {
  text: string;
  deleteBackwards?: number;
}

interface SuggestionGroup {
  label: string;
  items: Suggestion[];
  prefixMatch?: boolean;
  skipFilter?: boolean;
}

const cleanText = s => s.replace(/[{}[\]="(),!~+\-*/^%]/g, '').trim();
const wrapText = text => ({ text });

const RATE_RANGES = ['1m', '5m', '10m', '30m', '1h'];
const DEFAULT_DATABASE = 'telegraf';

function expandQuery(bucket, measurement, field) {
  if (field) {
    return (
      `from(bucket: "${bucket}")\n` +
      `  |> filter(fn: (r) => r["_measurement"] == "${measurement}")\n` +
      `  |> filter(fn: (r) => r["_field"] == "${field}")\n` +
      `  |> range($range)\n` +
      `  |> limit(n: 1000)`
    );
  }
  return `from(bucket: "${bucket}")\n` +
  `  |> filter(fn: (r) => r["_measurement"] == "${measurement}")\n` +
  `  |> range($range)\n` +
  `  |> limit(n: 1000)`;
}

export default class FluxQueryField extends QueryField {
  fields: any;
  measurements: any;

  componentDidMount() {
    this.updateMenu();
  }

  componentWillReceiveProps(nextProps) {
    // initialQuery is null in case the user typed
    if (nextProps.initialQuery !== null && nextProps.initialQuery !== this.props.initialQuery) {
      this.setState({ value: getInitialValue(nextProps.initialQuery) });
    }
  }

  handleTypeahead = debounce(() => {
    const selection = window.getSelection();
    if (selection === null) {
      return null;
    }
    if (selection.anchorNode) {
      const wrapperNode = selection.anchorNode.parentElement;
      if (wrapperNode === null) {
        return;
      }
      const editorNode = wrapperNode.closest('.slate-query-field');
      if (!editorNode || this.state.value.isBlurred) {
        // Not inside this editor
        return;
      }

      // DOM ranges
      const range = selection.getRangeAt(0);
      const text = selection.anchorNode.textContent;
      if (text === null) {
        return;
      }
      const offset = range.startOffset;
      let prefix = cleanText(text.substr(0, offset));

      // Model ranges
      const modelOffset = this.state.value.anchorOffset;
      const modelPrefix = this.state.value.anchorText.text.slice(0, modelOffset);

      // Determine candidates by context
      const suggestionGroups: SuggestionGroup[] = [];
      const wrapperClasses = wrapperNode.classList;
      let typeaheadContext: string | null = null;

      const database = this.props.defaultDatabase || DEFAULT_DATABASE;

      if (wrapperClasses.contains('context-range')) {
        // Rate ranges
        typeaheadContext = 'context-range';
        suggestionGroups.push({
          label: 'Range vector',
          items: [...RATE_RANGES].map(wrapText),
        });
      } else if (wrapperClasses.contains('short-delimiter') || wrapperClasses.contains('short-field')) {
        // Suggest measurements or fields
        const databaseNode = getPreviousCousin(wrapperNode, '.short-root');
        const db = databaseNode && databaseNode.textContent.replace('..', '');
        const measurementNode = getPreviousCousin(wrapperNode, '.short-field');
        const measurement = measurementNode && measurementNode.textContent;

        if (db && measurement) {
          prefix = prefix.replace(/\w*\.\./g, '');
          // Expand
          const expandedQuery = expandQuery(db, measurement, prefix);
          suggestionGroups.push({
            label: 'Expand',
            items: [
              {
                deleteBackwards: modelOffset,
                text: expandedQuery,
              },
            ],
            skipFilter: true,
          });
          // Additional fields
          const fields = this.fields && this.fields[db] && this.fields[db][measurement];
          if (fields) {
            typeaheadContext = 'context-fields';
            suggestionGroups.push({ label: 'Fields', items: fields });
          } else {
            this.fetchFields(db, measurement);
            return;
          }
        } else if (db) {
          const measurements = this.measurements && this.measurements[db];
          if (measurements) {
            prefix = prefix.replace(/\w*\.\./g, '');
            typeaheadContext = 'context-measurements';
            suggestionGroups.push({ label: 'Measurements', items: measurements });
          } else {
            this.fetchMeasurements(db);
            return;
          }
        }
      } else if (modelPrefix.match(/(^\s+$)|(\)\s+$)/)) {
        // Operators after functions
        typeaheadContext = 'context-operator';
        suggestionGroups.push({
          prefixMatch: true,
          label: 'Operators',
          items: ['|>', '<-', '+', '-', '*', '/', '<', '>', '<=', '=>', '==', '=~', '!=', '!~'].map(wrapText),
        });
      } else if (prefix && !wrapperClasses.contains('argument')) {
        // Need prefix for functions
        typeaheadContext = 'context-builtin';
        suggestionGroups.push({
          prefixMatch: true,
          label: 'Functions',
          items: FUNCTIONS,
        });
      } else if (Plain.serialize(this.state.value) === '' || text.match(/[+\-*/^%]/)) {
        // Need prefix for functions
        typeaheadContext = 'context-new';
        suggestionGroups.push({
          prefixMatch: true,
          label: 'Templates',
          items: [`from(bucket: "${database}") |> range($range) `].map(wrapText),
        });
        suggestionGroups.push({
          prefixMatch: true,
          label: 'Shortcodes',
          items: [`${database}..`].map(wrapText),
        });
      }

      let results = 0;
      const filteredSuggestions = suggestionGroups.map(group => {
        if (group.items && prefix && !group.skipFilter) {
          group.items = group.items.filter(c => c.text.length >= prefix.length);
          if (group.prefixMatch) {
            group.items = group.items.filter(c => c.text.indexOf(prefix) === 0);
          } else {
            group.items = group.items.filter(c => c.text.indexOf(prefix) > -1);
          }
        }
        results += group.items.length;
        return group;
      });

      console.log('handleTypeahead', selection.anchorNode, wrapperClasses, text, offset, prefix, typeaheadContext);

      this.setState({
        typeaheadPrefix: prefix,
        typeaheadContext,
        typeaheadText: text,
        suggestions: results > 0 ? filteredSuggestions : [],
      });
      return;
    } else {
      return;
    }
  }, 500);

  applyTypeahead(change, suggestion) {
    const { typeaheadPrefix, typeaheadContext, typeaheadText } = this.state;
    let suggestionText = suggestion.display || suggestion.text || suggestion;
    const move = 0;

    // Modify suggestion based on context
    switch (typeaheadContext) {
      case 'context-operator': {
        const nextChar = getNextCharacter();
        if (!nextChar && nextChar !== ' ') {
          suggestionText += ' ';
        }
        break;
      }

      case 'context-measurements': {
        const nextChar = getNextCharacter();
        if (!nextChar && nextChar !== '.') {
          suggestionText += '..';
        }
        break;
      }

      default:
    }

    this.resetTypeahead();

    // Remove the current, incomplete text and replace it with the selected suggestion
    const backward = suggestion.deleteBackwards || typeaheadPrefix.length;
    const text = cleanText(typeaheadText);
    const suffixLength = text.length - typeaheadPrefix.length;
    const offset = typeaheadText.indexOf(typeaheadPrefix);
    const midWord = typeaheadPrefix && ((suffixLength > 0 && offset > -1) || suggestionText === typeaheadText);
    const forward = midWord ? suffixLength + offset : 0;

    // If new-lines, apply suggestion as block
    if (suggestionText.match(/\n/)) {
      const fragment = makeFragment(suggestionText);
      return change
        .deleteBackward(backward)
        .deleteForward(forward)
        .insertFragment(fragment)
        .focus();
    }

    return change
      .deleteBackward(backward)
      .deleteForward(forward)
      .insertText(suggestionText)
      .move(move)
      .focus();
  }

  async fetchFields(db, measurement) {
    const query = `field_keys(${db},${measurement})`;
    const result = await this.request(query);
    if (!this.fields) {
      this.fields = {};
    }
    if (!this.fields[db]) {
      this.fields[db] = {};
    }
    this.fields[db][measurement] = result;
    setTimeout(this.handleTypeahead, 0);
  }

  async fetchMeasurements(db) {
    const query = `measurements(${db})`;
    const result = await this.request(query);
    if (!this.measurements) {
      this.measurements = {};
    }
    this.measurements[db] = result;
    setTimeout(this.handleTypeahead, 0);
  }
}
