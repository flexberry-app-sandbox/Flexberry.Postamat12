import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.postamat12.caption'),
          title: i18n.t('forms.application.sitemap.postamat12.title'),
          children: [{
            link: 'i-i-s-postamat12-ячейка-l',
            caption: i18n.t('forms.application.sitemap.postamat12.i-i-s-postamat12-ячейка-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat12.i-i-s-postamat12-ячейка-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-postamat12-служба-доставки-l',
            caption: i18n.t('forms.application.sitemap.postamat12.i-i-s-postamat12-служба-доставки-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat12.i-i-s-postamat12-служба-доставки-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-postamat12-посылка-l',
            caption: i18n.t('forms.application.sitemap.postamat12.i-i-s-postamat12-посылка-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat12.i-i-s-postamat12-посылка-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-postamat12-логистика-l',
            caption: i18n.t('forms.application.sitemap.postamat12.i-i-s-postamat12-логистика-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat12.i-i-s-postamat12-логистика-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-postamat12-постамат-l',
            caption: i18n.t('forms.application.sitemap.postamat12.i-i-s-postamat12-постамат-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat12.i-i-s-postamat12-постамат-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-postamat12-ключ-l',
            caption: i18n.t('forms.application.sitemap.postamat12.i-i-s-postamat12-ключ-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat12.i-i-s-postamat12-ключ-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-postamat12-хранение-l',
            caption: i18n.t('forms.application.sitemap.postamat12.i-i-s-postamat12-хранение-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat12.i-i-s-postamat12-хранение-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-postamat12-пользователь-l',
            caption: i18n.t('forms.application.sitemap.postamat12.i-i-s-postamat12-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat12.i-i-s-postamat12-пользователь-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})