import Ember from 'ember';

export default Ember.Controller.extend({
  showSecret: Ember.computed('secretValue', function() {
    let val = this.get('secretValue');
    if (val === 'secret') {
      return true;
    } else {
      return false;
    }
  }),

  actions: {
    checkSecret() {
      let val = this.get('secretValue');
      if (val === 'secret') {
        this.set('showSecretOld', true);
      } else {
        this.set('showSecretOld', false);
      }
    }
  }
});
