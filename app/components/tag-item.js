import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',

  classNameBindings: [ ":tag-item", 'tagActive:active' ],

  tagActive: Ember.computed('selectedTag', function() {
    // debugger
    return this.get('tagItem.id') === this.get('selectedTag.id');
  }),

  click: function() {
    this.sendAction('action', this.get('tagItem'));
  }
});
