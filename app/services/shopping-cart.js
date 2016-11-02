import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0,
  add(product) {
    this.get('items').pushObject(product);
  },
  remove(product) {
    this.get('items').removeObject(product);
  },
  cartTotal(allItems) {
    console.log(allItems[0].price);
  }
});
