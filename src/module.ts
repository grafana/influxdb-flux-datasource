import InfluxDatasource from './datasource';
import { InfluxFluxQueryCtrl } from './query_ctrl';
import { InfluxConfigCtrl } from './config_ctrl';

class InfluxAnnotationsQueryCtrl {
  static templateUrl = 'partials/annotations.editor.html';
}

export {
  InfluxDatasource as Datasource,
  InfluxFluxQueryCtrl as QueryCtrl,
  InfluxConfigCtrl as ConfigCtrl,
  InfluxAnnotationsQueryCtrl as AnnotationsQueryCtrl,
};
