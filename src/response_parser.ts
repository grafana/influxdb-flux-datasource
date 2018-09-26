import Papa from 'papaparse';
import flatten from 'lodash/flatten';
import groupBy from 'lodash/groupBy';

interface Annotation {
  time: number;
  tags: any[];
  text: string;
  annotation: any;
}

interface Table {
  type: string;
  columns: any[];
  rows: any[];
}

const filterColumnKeys = key =>
  key && key[0] !== '_' && key !== 'result' && key !== 'table';

const IGNORE_FIELDS_FOR_NAME = ['result', '', 'table'];

export const getTagsFromRecord = record =>
  Object.keys(record)
    .filter(key => key[0] !== '_')
    .filter(key => IGNORE_FIELDS_FOR_NAME.indexOf(key) === -1)
    .reduce((tags, key) => {
      tags[key] = record[key];
      return tags;
    }, {});

export const getNameFromRecord = record => {
  // Measurement and field
  const metric = [record._measurement, record._field];

  // Add tags
  const tags = getTagsFromRecord(record);
  const tagValues = Object.keys(tags).map(key => `${key}=${tags[key]}`);

  return [...metric, ...tagValues].join(' ');
};

const determineFieldTypes = (input: string, meta: any) => {
  const typesByField = {};
  if (input[0] === '#') {
    const firstLine = input.split('\n')[0];
    const types = firstLine.slice(1).split(',');
    if (types.length === meta.fields.length) {
      meta.fields.forEach((f, i) => {
        typesByField[f] = types[i];
      });
    }
  }
  return typesByField;
};

const parseCSV = (input: string) => {
  const {data, meta} = Papa.parse(input, {
    header: true,
    comments: '#',
  });

  const types = determineFieldTypes(input, meta);

  return {data, types};
};

export const parseValue = (input: string) => {
  const value = parseFloat(input);
  return isNaN(value) ? null : value;
};

const parseValueWithType = (value: string, type: string) => {
  let parsed: any = value;
  if (type) {
    try {
      switch (type) {
        case 'float':
        case 'double':
          parsed = parseFloat(value);
          break;
        case 'integer':
        case 'long':
          parsed = parseInt(value, 10);
          break;

        default:
          break;
      }
    } catch (error) {
      console.error(error);
    }
  }
  return parsed;
};

export const parseTime = (input: string) => Date.parse(input);

export function parseResults(response: string): any[] {
  return response.trim().split(/\n\s*\s/);
}

export function getAnnotationsFromResult(result: string, options: any) {
  const {data} = parseCSV(result);
  if (data.length === 0) {
    return [];
  }

  const annotations: Annotation[] = [];
  const textSelector = options.textCol || '_value';
  const tagsSelector = options.tagsCol || '';
  const tagSelection = tagsSelector.split(',').map(t => t.trim());

  data.forEach(record => {
    // Remove empty values, then split in different tags for comma separated values
    const tags = getTagsFromRecord(record);
    const tagValues = flatten(
      tagSelection.filter(tag => tags[tag]).map(tag => tags[tag].split(','))
    );

    annotations.push({
      annotation: options,
      time: parseTime(record._time),
      tags: tagValues,
      text: record[textSelector],
    });
  });

  return annotations;
}

export function getTableModelFromResult(result: string) {
  const {data, types} = parseCSV(result);

  const table: Table = {type: 'table', columns: [], rows: []};
  if (data.length > 0) {
    // First columns are fixed
    const firstColumns = [
      {text: 'Time', id: '_time'},
      {text: 'Measurement', id: '_measurement'},
      {text: 'Field', id: '_field'},
    ];

    // Dynamically add columns for tags
    const firstRecord = data[0];
    const tags = Object.keys(firstRecord)
      .filter(filterColumnKeys)
      .map(key => ({id: key, text: key}));

    const valueColumn = {id: '_value', text: 'Value'};
    const columns = [...firstColumns, ...tags, valueColumn];
    columns.forEach(c => table.columns.push(c));

    // Add rows
    const valueColumnIndex = columns.length - 1;
    const valueColumnType = types[valueColumn.id];
    data.forEach(record => {
      const row = columns.map(c => record[c.id]);
      row[valueColumnIndex] = parseValueWithType(row[valueColumnIndex], valueColumnType);
      table.rows.push(row);
    });
  }

  return table;
}

export function getTimeSeriesFromResult(result: string) {
  const {data} = parseCSV(result);
  if (data.length === 0) {
    return [];
  }

  // Group results by table ID (assume one table per timeseries for now)
  const tables = groupBy(data, 'table');
  const seriesList = Object.keys(tables)
    .map(id => tables[id])
    .map(series => {
      const datapoints = series.map(record => [
        parseValue(record['_value']),
        parseTime(record['_time']),
      ]);
      const alias = getNameFromRecord(series[0]);
      return {datapoints, target: alias};
    });

  return seriesList;
}

export function getValuesFromResult(result: string) {
  const {data} = parseCSV(result);
  return data.map(record => record['_value']);
}
