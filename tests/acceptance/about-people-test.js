import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'team-initial-training/tests/helpers/start-app';

var application;

module('Acceptance | about people', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /about/people', function(assert) {
  visit('/about/people');

  andThen(function() {
    assert.equal(currentURL(), '/about/people');
  });
});

test('visiting about/people shows 10 users', function(assert) {
  server.createList('contact', 10);

  visit('/about/people');

  andThen(function() {
    let foundPeople = find('.person');
    assert.equal(foundPeople.length, 10);
  });
});
