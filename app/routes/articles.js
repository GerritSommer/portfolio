import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    var tag = this.store.push('tag',     { id: 1, name: 'Ember' });
              this.store.push('tag',     { id: 2, name: 'Links' });
              this.store.push('article', { id: 1, title: 'Title of first article',  createdAt: "2015-06-24T12:59:01.692Z", tags: [ tag ] });
              this.store.push('article', { id: 2, title: 'Title of second article', createdAt: "2015-06-24T12:59:01.692Z" });
  },
  model: function() {
    return this.store.all('article');
  },
});
