import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-postamat12-пользователь', 'Unit | Model | i-i-s-postamat12-пользователь', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-postamat12-ключ',
    'model:i-i-s-postamat12-логистика',
    'model:i-i-s-postamat12-пользователь',
    'model:i-i-s-postamat12-постамат',
    'model:i-i-s-postamat12-посылка',
    'model:i-i-s-postamat12-регистр-посылок',
    'model:i-i-s-postamat12-регистр-хран',
    'model:i-i-s-postamat12-служба-доставки',
    'model:i-i-s-postamat12-хранение',
    'model:i-i-s-postamat12-ячейка',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
