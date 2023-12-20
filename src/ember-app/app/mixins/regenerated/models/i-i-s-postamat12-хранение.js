import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗавершения: DS.attr('date'),
  датаНачала: DS.attr('date'),
  номер: DS.attr('number'),
  продления: DS.attr('string', { defaultValue: 'Не продлен' }),
  ячейка: DS.belongsTo('i-i-s-postamat12-ячейка', { inverse: null, async: false }),
  регистрПосылок: DS.hasMany('i-i-s-postamat12-регистр-посылок', { inverse: 'хранение', async: false })
});

export let ValidationRules = {
  датаЗавершения: {
    descriptionKey: 'models.i-i-s-postamat12-хранение.validations.датаЗавершения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаНачала: {
    descriptionKey: 'models.i-i-s-postamat12-хранение.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-postamat12-хранение.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  продления: {
    descriptionKey: 'models.i-i-s-postamat12-хранение.validations.продления.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ячейка: {
    descriptionKey: 'models.i-i-s-postamat12-хранение.validations.ячейка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистрПосылок: {
    descriptionKey: 'models.i-i-s-postamat12-хранение.validations.регистрПосылок.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ХранениеE', 'i-i-s-postamat12-хранение', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаЗавершения: attr('Дата завершения', { index: 2 }),
    продления: attr('Продления', { index: 3 }),
    ячейка: belongsTo('i-i-s-postamat12-ячейка', 'Ячейка', {
      номерЯчейки: attr('Номер ячейки', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'номерЯчейки' }),
    регистрПосылок: hasMany('i-i-s-postamat12-регистр-посылок', 'Регистр посылок', {
      номер: attr('Номер', { index: 0 }),
      посылка: belongsTo('i-i-s-postamat12-посылка', 'Посылка', {
        номер: attr('Номер', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'номер' })
    })
  });

  modelClass.defineProjection('ХранениеL', 'i-i-s-postamat12-хранение', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаЗавершения: attr('Дата завершения', { index: 2 }),
    продления: attr('Продления', { index: 3 }),
    ячейка: belongsTo('i-i-s-postamat12-ячейка', 'Номер ячейки', {
      номерЯчейки: attr('Номер ячейки', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
