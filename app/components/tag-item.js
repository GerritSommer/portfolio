import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: [ "tag-item" ],

  click: function() {
    this.sendAction('action', this.get('tagItem'));
  }
});
