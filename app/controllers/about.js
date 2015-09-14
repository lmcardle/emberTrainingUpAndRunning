import Ember from 'ember';

export default Ember.Controller.extend({
  name: 'liam',

  actions: {
    checkSecret() {
      let val = this.get('secretValue');
      if (val === 'secret') {
        this.set('showSecret', true);
      } else {
        this.set('showSecret', false);
      }
    }
  }
});
