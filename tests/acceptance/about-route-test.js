import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'team-initial-training/tests/helpers/start-app';

var application;

module('Acceptance | about route', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /about', function(assert) {
  visit('/about');

  andThen(function() {
    assert.equal(currentURL(), '/about');
  });
});

test('clicking about link', function(assert) {
  visit('/');

  click('#about-link');

  andThen(function() {
    assert.equal(currentURL(), '/about');
  });
});

test('nothing to see', function(assert) {
  visit('/about');

  andThen(function() {
    let msgField = find('#secret-message');
    assert.equal(msgField.text().trim(), 'Nothing to see');
  });
});

test('secret message is shown', function(assert) {

  visit('/about');

  andThen(function() {
    let msgField = find('#secret-message-shown');
    assert.equal(msgField.length, 0);
  });

  fillIn('#secret-input', 'secret');

  andThen(function() {
    let msgField = find('#secret-message-shown');
    assert.equal(msgField.length, 1);
  });
});
