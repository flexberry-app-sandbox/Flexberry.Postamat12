import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-postamat12-ключ', 'Unit | Serializer | i-i-s-postamat12-ключ', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-postamat12-ключ',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-postamat12-состояние',
    'transform:i-i-s-postamat12-статус',
    'transform:i-i-s-postamat12-статусы',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
