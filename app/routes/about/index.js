import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    checkSecret() {
      let controller = this.get('controller');
      let val = controller.get('secretValue');
      if (val === 'secret') {
        controller.set('showSecret', true);
      } else {
        controller.set('showSecret', false);
      }
    }
  }
});
