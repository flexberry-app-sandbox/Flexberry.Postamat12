import {
  defineNamespace,
  defineProjections,
  Model as ЯчейкаMixin
} from '../mixins/regenerated/models/i-i-s-postamat12-ячейка';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЯчейкаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
