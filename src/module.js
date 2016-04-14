import OpenFalconDatasource from './datasource';
import OpenFalconQueryCtrl from './query_ctrl';

class OpenFalconConfigCtrl {}
OpenFalconConfigCtrl.templateUrl = 'partials/config.html';

class OpenFalconQueryOptionsCtrl {}
OpenFalconQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

class OpenFalconAnnotationsQueryCtrl {}
OpenFalconAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html'

export {
  OpenFalconDatasource as Datasource,
  OpenFalconQueryCtrl as QueryCtrl,
  OpenFalconConfigCtrl as ConfigCtrl,
  OpenFalconQueryOptionsCtrl as QueryOptionsCtrl,
  OpenFalconAnnotationsQueryCtrl as AnnotationsQueryCtrl
};
