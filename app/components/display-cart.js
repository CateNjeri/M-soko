import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    removeFromCart(product) {
      this.get('shoppingCart').remove(product);
    },
    cartTotal(allItems) {
      this.get('shoppingCart').cartTotal(allItems);
    }
  }
});
