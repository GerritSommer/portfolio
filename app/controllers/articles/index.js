import Ember from 'ember';

export default Ember.Controller.extend({
  selectedTag: null,

  articlesByTags: Ember.computed('articles.[]', 'selectedTag', function() {
    console.log('test');
    var articles = this.get('articles');
    if (this.get('selectedTag')) {
      articles = articles.filter((article) => {
        return article.get('tags').contains(this.get('selectedTag'));
      });
    }

    return articles;
  }),

  actions: {
   selectTag: function(tag) {
      this.set('selectedTag', tag);
    }
  }


});
