export const FUNCTIONS = [
  {
    text: 'count',
    display: 'count()',
    hint: 'For each aggregated column, ouput the number of non-null records.',
  },
  {
    text: 'covariance',
    display: 'covariance(columns: ["valA", "valB"])',
    hint: 'Compute covariance between two columns and write it to "_value".',
  },
  {
    text: 'derivative',
    display: 'derivative()',
    hint: 'Computes the time based difference between subsequent records',
  },
  {
    text: 'difference',
    display: 'difference()',
    hint: 'Computes the difference between subsequent records.',
  },
  {
    text: 'distinct',
    display: 'distinct(column: "host")',
    hint: 'Produce unique values for a given column',
  },
  {
    text: 'filter',
    display: 'filter(fn: (r) => r["_value"] > 0)',
    hint:
      'Applies a predicate function to each input record, output tables contain only records that matched the predicate.',
  },
  {
    text: 'first',
    display: 'first()',
    hint: 'Selects the first non-null record from the input table.',
  },
  {
    text: 'from',
    display: 'from(bucket: "database/policy")',
    hint: 'Starting point of a query, produces a table from the given bucket.',
  },
  {
    text: 'group',
    display: 'group(columns: ["host"], mode:"by") ',
    hint: 'Groups results by a specified list of columns',
  },
  {
    text: 'integral',
    display: 'integral()',
    hint: 'For each aggregate column, output the area under the curve.',
  },
  {
    text: 'join',
    display: 'join(tables: {cpu: cpu, mem: mem}, on: ["host"])',
    hint: 'Join two time series together on time and the list of "on" column keys.',
  },
  {
    text: 'last',
    display: 'last()',
    hint: 'Selects the last non-null record from the input table.',
  },
  {
    text: 'limit',
    display: 'limit(n: 10)',
    hint: 'Limit the output table to the first "n" records of the input table. ',
  },
  {
    text: 'map',
    display: 'map(fn: (r) => r)',
    hint: 'Applies a function to each record of the input tables.',
  },
  {
    text: 'max',
    display: 'max()',
    hint: 'Selects the maximum record from the input table.',
  },
  {
    text: 'mean',
    display: 'mean()',
    hint: 'For each aggregated column, it outputs the mean as a float.',
  },
  {
    text: 'min',
    display: 'min()',
    hint: 'Selects the minimum record from the input table.',
  },
  {
    text: 'percentile',
    display: 'percentile(percentile: 0.95)',
    hint:
      ' For each aggregated column, it outputs the value that represents the specified percentile of the non-null record as a float.',
  },
  {
    text: 'range',
    display: 'range($range)',
    hint:
      'Filters the results by time boundaries "start" and "stop". Use "$range" to apply the dashboard range.',
  },
  {
    text: 'sample',
    display: 'sample(n: 10)',
    hint: 'Selects a every "n"-th record from the input table.',
  },
  {
    text: 'set',
    display: 'set(key: "myKey", value: "42")',
    hint: 'Assigns a static value to each record',
  },
  {
    text: 'shift',
    display: 'shift(shift: +12h)',
    hint: 'Add a fixed duration to time columns.',
  },
  {
    text: 'skew',
    display: 'skew()',
    hint: 'For each aggregated column, it outputs the skew as a float.',
  },
  {
    text: 'sort',
    display: 'sort(cols: ["host", "value"], desc: true)',
    hint: 'Sorts the results by the specified columns, default sort is ascending',
  },
  {
    text: 'spread',
    display: 'spread()',
    hint:
      'For each aggregated column, it outputs the difference between the min and max values.',
  },
  // { text: 'stateTracking', display: '', hint: '' },
  {
    text: 'stddev',
    display: 'stddev()',
    hint: 'For each aggregated column, it outputs the standard deviation as a float.',
  },
  {
    text: 'sum',
    display: 'sum()',
    hint: 'For each aggregated column, it outputs the sum of all records. ',
  },
  {
    text: 'window',
    display: 'window(every: 10m)',
    hint: 'Partitions the results by a given time range.',
  },
  {
    text: 'yield',
    display: 'yield()',
    hint: 'Yield the input table as the result of the query.',
  },
];

const tokenizer = {
  comment: {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true,
  },
  'context-short': {
    pattern: /^\w+\.\.(\w+\.\.)?\w*$/i,
    alias: 'symbol',
    inside: {
      'short-root': /^\w+(?=\.\.)/,
      'short-delimiter': /\.\./,
      'short-field': /\w+$/,
      // 'short-measurement': {
      //   pattern: /\.\.\w+\.\./,
      // },
    },
  },
  'function-context': {
    pattern: /[a-z0-9_]+\(.*?\)/i,
    inside: {},
  },
  duration: {
    pattern: /-?\d+(ns|u|µ|ms|s|m|h|d|w)/i,
    alias: 'number',
  },
  builtin: new RegExp(`\\b(?:${FUNCTIONS.map(f => f.text).join('|')})(?=\\s*\\()`, 'i'),
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true,
  },
  keyword: /\b(?:and|empty|import|in|not|or|return)\b/,
  boolean: /\b(?:true|false)\b/,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /-|\+|\*|\/|%|==|<=?|>=?|!=|!~|=~|=|<-|\|>/,
  punctuation: /[{}[\];(),.:]/,
};

tokenizer['function-context'].inside = {
  argument: {
    pattern: /[a-z0-9_]+(?=:)/i,
    alias: 'symbol',
  },
  duration: tokenizer.duration,
  number: tokenizer.number,
  builtin: tokenizer.builtin,
  string: tokenizer.string,
};

export default tokenizer;
