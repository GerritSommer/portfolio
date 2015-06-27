import DS from 'ember-data';

// new Date.toISOString()

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),

  tags: DS.hasMany('tags')

});
