import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | people/register', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:people/register');
    assert.ok(route);
  });
});
