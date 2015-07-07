import Ember from 'ember';

export default Ember.Component.extend({
  tagName:      'div',
  classNames:   [ 'multi-select'],
  selection:    [],
  multiple:     Ember.computed('selection.[]', function() { return Ember.isArray(this.get('selection'));}),
  open:         false,
  isOpen:       Ember.computed('open', function(){ if (this.get('open')) return 'open'; }),
  searchable:   Ember.computed.gte('options.length', 10),
  searchString: '',

  buttonLabel:  Ember.computed('selection',function(){
    if (this.get('multiple'))
      return this.get('label') || 'please select';
    else {
      var selectedItem      = this.get('options').findBy(this.get('valuePath'), this.get('selection'));
      if (selectedItem && this.get('labelPath'))
        return selectedItem.get(this.get('labelPath'));
      else
        return this.get('label') || 'please select';
    }
  }),

  isSelected: function(value) {
    var selection = this.get('selection');

    if (this.get('multiple')) {
      return selection.contains(value);
    } else {
      return selection === value;
    }

  },

  filteredOptions: Ember.computed('options.[]', 'searchString', function(){
    var searchString = this.get('searchString');
    var options      = this.get('options');
    var labelPath    = this.get('labelPath');
    if (Ember.isBlank(searchString))
      return options;
    else {
      return options.filter(function(option) {
        return option.get(labelPath).toLowerCase().indexOf(searchString.toLowerCase()) > -1;
      });
    }

  }),

  setSingleSelection: function(item) {
    var valuePath = this.get('valuePath');
    var value     = valuePath ? item.get(valuePath) : item;
    var selected  = this.isSelected(value);

    selected ? this.set('selection', null) : this.set('selection', value);
    this.toggleProperty('open');
  },

  setMultiSelection: function(item) {
    var valuePath = this.get('valuePath');
    var value     = valuePath ? item.get(valuePath) : item;
    var selection = this.get('selection');
    var selected  = this.isSelected(value);

    if (selected) {
      selection.removeObject(value);
      item.set('state', null);
    } else {
      item.set('state', 'selected');
      selection.addObject(value);
    }

  },

  onDidInsertElement: (function() {
    window.$(document).mouseup((e) => {
      if (this.$().has(e.target).length === 0) {
        this.set('open', false);
        this.set('searchString', '');
      }
    });
  }).on('init'),

  actions: {

    select: function(item) {
      console.log('a')
      if (this.get('multiple'))
        this.setMultiSelection(item);
      else
        this.setSingleSelection(item);
      return;
    },

    toggleDropdown: function() {
      this.toggleProperty('open');
      return;
    },
    clearSearch: function() {
      this.set('searchString', '');
    }

  }

});
