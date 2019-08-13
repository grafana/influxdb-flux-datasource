import appEvents from 'grafana/app/core/app_events';
import { QueryCtrl } from 'grafana/app/plugins/sdk';

import './editor/editor_component';

function makeDefaultQuery(bucket: string) {
  return `from(bucket: "${bucket}")
  |> range($range)
  |> limit(n:1000)
`;
}
export class InfluxFluxQueryCtrl extends QueryCtrl {
  static templateUrl = 'partials/query.editor.html';

  dataPreview?: string;
  defaultBucket: string;
  resultRecordCount: string;
  resultTableCount: string;
  resultFormats: any[];

  /** @ngInject */
  constructor($scope: any, $injector: any) {
    super($scope, $injector);

    this.resultRecordCount = '';
    this.resultTableCount = '';

    if (this.target.query === undefined) {
      this.target.query = makeDefaultQuery(this.datasource.bucket);
    }

    this.defaultBucket = this.datasource.bucket;
    this.resultFormats = [{ text: 'Time series', value: 'time_series' }, { text: 'Table', value: 'table' }];

    appEvents.on('ds-request-response', this.onResponseReceived, $scope);
    this.panelCtrl.events.on('refresh', this.onRefresh, $scope);
    this.panelCtrl.events.on('data-received', this.onDataReceived, $scope);
  }

  onDataReceived = dataList => {
    this.resultRecordCount = dataList.reduce((count, model) => {
      const records = model.type === 'table' ? model.rows.length : model.datapoints.length;
      return count + records;
    }, 0);
    this.resultTableCount = dataList.length;
  };

  onResponseReceived = response => {
    this.dataPreview = response.data;
  };

  onRefresh = () => {
    this.dataPreview = '';
    this.resultRecordCount = '';
    this.resultTableCount = '';
  };

  onChange = nextQuery => {
    console.log('nextQuery', nextQuery);
    this.target.query = nextQuery;
  };

  onExecute = () => {
    console.log('Influx refresh metric data', this.target);
    this.panelCtrl.refresh();
  };

  requestMetadata = query => {
    return this.datasource.metricFindQuery(query);
  };

  getCollapsedText() {
    return this.target.query;
  }
}
