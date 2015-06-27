import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    this.modelFor('articles');
  },
  setupController: function(controller){
    controller.set('tags', this.store.all('tag'));
    controller.set('articles', this.store.all('article'));
  }
});
