import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0,
  add(product) {
    this.get('items').pushObject(product);
  },
  cartTotal(price) {
    this.set('total', price + this.get('total'));
  },
  removeFromTotal(price) {
    this.set('total', this.get('total') - price);
  },
  remove(product) {
    this.get('items').removeObject('product');
  }
});
