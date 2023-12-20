import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISPostamat12КлючLForm from './forms/i-i-s-postamat12-ключ-l';
import IISPostamat12ЛогистикаLForm from './forms/i-i-s-postamat12-логистика-l';
import IISPostamat12ПользовательLForm from './forms/i-i-s-postamat12-пользователь-l';
import IISPostamat12ПостаматLForm from './forms/i-i-s-postamat12-постамат-l';
import IISPostamat12ПосылкаLForm from './forms/i-i-s-postamat12-посылка-l';
import IISPostamat12СлужбаДоставкиLForm from './forms/i-i-s-postamat12-служба-доставки-l';
import IISPostamat12ХранениеLForm from './forms/i-i-s-postamat12-хранение-l';
import IISPostamat12ЯчейкаLForm from './forms/i-i-s-postamat12-ячейка-l';
import IISPostamat12КлючEForm from './forms/i-i-s-postamat12-ключ-e';
import IISPostamat12ЛогистикаEForm from './forms/i-i-s-postamat12-логистика-e';
import IISPostamat12ПользовательEForm from './forms/i-i-s-postamat12-пользователь-e';
import IISPostamat12ПостаматEForm from './forms/i-i-s-postamat12-постамат-e';
import IISPostamat12ПосылкаEForm from './forms/i-i-s-postamat12-посылка-e';
import IISPostamat12СлужбаДоставкиEForm from './forms/i-i-s-postamat12-служба-доставки-e';
import IISPostamat12ХранениеEForm from './forms/i-i-s-postamat12-хранение-e';
import IISPostamat12ЯчейкаEForm from './forms/i-i-s-postamat12-ячейка-e';
import IISPostamat12КлючModel from './models/i-i-s-postamat12-ключ';
import IISPostamat12ЛогистикаModel from './models/i-i-s-postamat12-логистика';
import IISPostamat12ПользовательModel from './models/i-i-s-postamat12-пользователь';
import IISPostamat12ПостаматModel from './models/i-i-s-postamat12-постамат';
import IISPostamat12ПосылкаModel from './models/i-i-s-postamat12-посылка';
import IISPostamat12РегистрПосылокModel from './models/i-i-s-postamat12-регистр-посылок';
import IISPostamat12РегистрХранModel from './models/i-i-s-postamat12-регистр-хран';
import IISPostamat12СлужбаДоставкиModel from './models/i-i-s-postamat12-служба-доставки';
import IISPostamat12ХранениеModel from './models/i-i-s-postamat12-хранение';
import IISPostamat12ЯчейкаModel from './models/i-i-s-postamat12-ячейка';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-postamat12-ключ': IISPostamat12КлючModel,
    'i-i-s-postamat12-логистика': IISPostamat12ЛогистикаModel,
    'i-i-s-postamat12-пользователь': IISPostamat12ПользовательModel,
    'i-i-s-postamat12-постамат': IISPostamat12ПостаматModel,
    'i-i-s-postamat12-посылка': IISPostamat12ПосылкаModel,
    'i-i-s-postamat12-регистр-посылок': IISPostamat12РегистрПосылокModel,
    'i-i-s-postamat12-регистр-хран': IISPostamat12РегистрХранModel,
    'i-i-s-postamat12-служба-доставки': IISPostamat12СлужбаДоставкиModel,
    'i-i-s-postamat12-хранение': IISPostamat12ХранениеModel,
    'i-i-s-postamat12-ячейка': IISPostamat12ЯчейкаModel
  },

  'application-name': 'Postamat12',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Postamat12',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Postamat12',
          title: 'Postamat12'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        postamat12: {
          caption: 'Postamat12',
          title: 'Postamat12',
          'i-i-s-postamat12-ячейка-l': {
            caption: 'Ячейка',
            title: ''
          },
          'i-i-s-postamat12-служба-доставки-l': {
            caption: 'Служба доставки',
            title: ''
          },
          'i-i-s-postamat12-посылка-l': {
            caption: 'Посылка',
            title: ''
          },
          'i-i-s-postamat12-логистика-l': {
            caption: 'Логистика',
            title: ''
          },
          'i-i-s-postamat12-постамат-l': {
            caption: 'Постамат',
            title: ''
          },
          'i-i-s-postamat12-ключ-l': {
            caption: 'Ключ',
            title: ''
          },
          'i-i-s-postamat12-хранение-l': {
            caption: 'Хранение',
            title: ''
          },
          'i-i-s-postamat12-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-postamat12-ключ-l': IISPostamat12КлючLForm,
    'i-i-s-postamat12-логистика-l': IISPostamat12ЛогистикаLForm,
    'i-i-s-postamat12-пользователь-l': IISPostamat12ПользовательLForm,
    'i-i-s-postamat12-постамат-l': IISPostamat12ПостаматLForm,
    'i-i-s-postamat12-посылка-l': IISPostamat12ПосылкаLForm,
    'i-i-s-postamat12-служба-доставки-l': IISPostamat12СлужбаДоставкиLForm,
    'i-i-s-postamat12-хранение-l': IISPostamat12ХранениеLForm,
    'i-i-s-postamat12-ячейка-l': IISPostamat12ЯчейкаLForm,
    'i-i-s-postamat12-ключ-e': IISPostamat12КлючEForm,
    'i-i-s-postamat12-логистика-e': IISPostamat12ЛогистикаEForm,
    'i-i-s-postamat12-пользователь-e': IISPostamat12ПользовательEForm,
    'i-i-s-postamat12-постамат-e': IISPostamat12ПостаматEForm,
    'i-i-s-postamat12-посылка-e': IISPostamat12ПосылкаEForm,
    'i-i-s-postamat12-служба-доставки-e': IISPostamat12СлужбаДоставкиEForm,
    'i-i-s-postamat12-хранение-e': IISPostamat12ХранениеEForm,
    'i-i-s-postamat12-ячейка-e': IISPostamat12ЯчейкаEForm
  },

});

export default translations;
