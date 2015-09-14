import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {id: 1, name: 'nimble'},
      {id: 2, name: 'storage'}
    ];
  }
});
