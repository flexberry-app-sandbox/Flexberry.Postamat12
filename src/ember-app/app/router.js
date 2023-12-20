import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-postamat12-ключ-l');
  this.route('i-i-s-postamat12-ключ-e',
  { path: 'i-i-s-postamat12-ключ-e/:id' });
  this.route('i-i-s-postamat12-ключ-e.new',
  { path: 'i-i-s-postamat12-ключ-e/new' });
  this.route('i-i-s-postamat12-логистика-l');
  this.route('i-i-s-postamat12-логистика-e',
  { path: 'i-i-s-postamat12-логистика-e/:id' });
  this.route('i-i-s-postamat12-логистика-e.new',
  { path: 'i-i-s-postamat12-логистика-e/new' });
  this.route('i-i-s-postamat12-пользователь-l');
  this.route('i-i-s-postamat12-пользователь-e',
  { path: 'i-i-s-postamat12-пользователь-e/:id' });
  this.route('i-i-s-postamat12-пользователь-e.new',
  { path: 'i-i-s-postamat12-пользователь-e/new' });
  this.route('i-i-s-postamat12-постамат-l');
  this.route('i-i-s-postamat12-постамат-e',
  { path: 'i-i-s-postamat12-постамат-e/:id' });
  this.route('i-i-s-postamat12-постамат-e.new',
  { path: 'i-i-s-postamat12-постамат-e/new' });
  this.route('i-i-s-postamat12-посылка-l');
  this.route('i-i-s-postamat12-посылка-e',
  { path: 'i-i-s-postamat12-посылка-e/:id' });
  this.route('i-i-s-postamat12-посылка-e.new',
  { path: 'i-i-s-postamat12-посылка-e/new' });
  this.route('i-i-s-postamat12-служба-доставки-l');
  this.route('i-i-s-postamat12-служба-доставки-e',
  { path: 'i-i-s-postamat12-служба-доставки-e/:id' });
  this.route('i-i-s-postamat12-служба-доставки-e.new',
  { path: 'i-i-s-postamat12-служба-доставки-e/new' });
  this.route('i-i-s-postamat12-хранение-l');
  this.route('i-i-s-postamat12-хранение-e',
  { path: 'i-i-s-postamat12-хранение-e/:id' });
  this.route('i-i-s-postamat12-хранение-e.new',
  { path: 'i-i-s-postamat12-хранение-e/new' });
  this.route('i-i-s-postamat12-ячейка-l');
  this.route('i-i-s-postamat12-ячейка-e',
  { path: 'i-i-s-postamat12-ячейка-e/:id' });
  this.route('i-i-s-postamat12-ячейка-e.new',
  { path: 'i-i-s-postamat12-ячейка-e/new' });
});

export default Router;
