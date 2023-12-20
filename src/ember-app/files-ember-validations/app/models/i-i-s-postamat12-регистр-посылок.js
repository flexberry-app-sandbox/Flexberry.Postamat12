import {
  defineNamespace,
  defineProjections,
  Model as РегистрПосылокMixin
} from '../mixins/regenerated/models/i-i-s-postamat12-регистр-посылок';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РегистрПосылокMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
