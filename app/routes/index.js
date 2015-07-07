import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      Ember.Object.create({ label: 'label 1', value: 'Value 1'}),
      Ember.Object.create({ label: 'label 2', value: 'Value 2'}),
      Ember.Object.create({ label: 'label 3', value: 'Value 3'}),
      Ember.Object.create({ label: 'label 4', value: 'Value 4'}),
      Ember.Object.create({ label: 'label 5', value: 'Value 5'}),
      Ember.Object.create({ label: 'label 6', value: 'Value 6'}),
      Ember.Object.create({ label: 'label 7', value: 'Value 7'}),
      Ember.Object.create({ label: 'label 8', value: 'Value 8'}),
      Ember.Object.create({ label: 'label 9', value: 'Value 9'}),
      Ember.Object.create({ label: 'label 10', value: 'Value 10'})
    ];
  }
});
