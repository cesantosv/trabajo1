import EmberObject from '@ember/object';
import ValidationsMixin from 'trabajo1/mixins/validations';
import { module, test } from 'qunit';

module('Unit | Mixin | validations', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let ValidationsObject = EmberObject.extend(ValidationsMixin);
    let subject = ValidationsObject.create();
    assert.ok(subject);
  });
});
