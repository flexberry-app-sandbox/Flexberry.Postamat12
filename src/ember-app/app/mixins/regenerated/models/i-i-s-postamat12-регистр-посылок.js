import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  посылка: DS.belongsTo('i-i-s-postamat12-посылка', { inverse: null, async: false }),
  хранение: DS.belongsTo('i-i-s-postamat12-хранение', { inverse: 'регистрПосылок', async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-postamat12-регистр-посылок.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  посылка: {
    descriptionKey: 'models.i-i-s-postamat12-регистр-посылок.validations.посылка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  хранение: {
    descriptionKey: 'models.i-i-s-postamat12-регистр-посылок.validations.хранение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистрПосылокE', 'i-i-s-postamat12-регистр-посылок', {
    номер: attr('Номер', { index: 0 }),
    посылка: belongsTo('i-i-s-postamat12-посылка', 'Посылка', {
      номер: attr('Номер', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'номер' })
  });
};
