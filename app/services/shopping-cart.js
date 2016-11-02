import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  add(product) {
    this.get('items').pushObject(product);
  }
});
