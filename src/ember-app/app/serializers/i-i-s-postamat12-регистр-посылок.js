import { Serializer as РегистрПосылокSerializer } from
  '../mixins/regenerated/serializers/i-i-s-postamat12-регистр-посылок';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РегистрПосылокSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
