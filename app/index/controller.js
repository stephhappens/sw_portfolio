import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['frameworkClass'],
  frameworkClass: '',
  actions: {
    changeStyle(framework) {
      this.set('frameworkClass', framework);
    }
  }
});
