import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РегистрПосылокMixin
} from '../mixins/regenerated/models/i-i-s-postamat12-регистр-посылок';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РегистрПосылокMixin, Validations, {
});

defineProjections(Model);

export default Model;
