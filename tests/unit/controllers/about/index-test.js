import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:about/index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  var controller = this.subject();
  assert.ok(controller);
});

test('showSecret is initially undefined', function(assert) {
  let ctrl = this.subject();
  assert.equal(ctrl.get('showSecret'), false, 'showSecret initially undefined');
});

test('showSecret is set to true', function(assert) {
  let ctrl = this.subject();

  ctrl.set('secretValue', 'secret');

  assert.equal(ctrl.get('showSecret'), true, 'showSecret is correctly set to true');
});

test('checkSecret action sets showSecretOld to true', function(assert) {
  let ctrl = this.subject();

  assert.equal(ctrl.get('showSecretOld'), undefined, 'showSecretOld is undefined');

  ctrl.set('secretValue', 'secret');
  ctrl.send('checkSecret');

  assert.equal(ctrl.get('showSecretOld'), true, 'showSecretOld is true');
});
