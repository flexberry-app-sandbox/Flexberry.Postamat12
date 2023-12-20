import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  статус: DS.attr('i-i-s-postamat12-статус'),
  ключ: DS.belongsTo('i-i-s-postamat12-ключ', { inverse: null, async: false }),
  логистика: DS.belongsTo('i-i-s-postamat12-логистика', { inverse: null, async: false }),
  пользователь: DS.belongsTo('i-i-s-postamat12-пользователь', { inverse: null, async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-postamat12-посылка.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-postamat12-посылка.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ключ: {
    descriptionKey: 'models.i-i-s-postamat12-посылка.validations.ключ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  логистика: {
    descriptionKey: 'models.i-i-s-postamat12-посылка.validations.логистика.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  пользователь: {
    descriptionKey: 'models.i-i-s-postamat12-посылка.validations.пользователь.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПосылкаE', 'i-i-s-postamat12-посылка', {
    номер: attr('Номер', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    логистика: belongsTo('i-i-s-postamat12-логистика', 'Логистика', {
      информация: attr('Информация', { index: 3, hidden: true }),
      состояние: attr('Состояние посылки', { index: 4 })
    }, { index: 2, displayMemberPath: 'информация' }),
    ключ: belongsTo('i-i-s-postamat12-ключ', 'Сгенерированный ключ', {
      сгенКлюч: attr('Сгенерированный ключ', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'сгенКлюч' }),
    пользователь: belongsTo('i-i-s-postamat12-пользователь', 'ФИО пользователя', {
      фИО: attr('ФИО пользователя', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ПосылкаL', 'i-i-s-postamat12-посылка', {
    номер: attr('Номер', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    логистика: belongsTo('i-i-s-postamat12-логистика', 'Информация посылки', {
      информация: attr('Информация посылки', { index: 2 }),
      состояние: attr('Состояние посылки', { index: 3 })
    }, { index: -1, hidden: true }),
    ключ: belongsTo('i-i-s-postamat12-ключ', 'Сгенерированный ключ', {
      сгенКлюч: attr('Сгенерированный ключ', { index: 4 })
    }, { index: -1, hidden: true }),
    пользователь: belongsTo('i-i-s-postamat12-пользователь', 'ФИО пользователя', {
      фИО: attr('ФИО пользователя', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
