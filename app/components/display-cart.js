import Ember from 'ember';

export default Ember.Component.extend({
  purchaseMessage: "",
  shoppingCart: Ember.inject.service(),
  actions: {
    removeFromCart(product) {
      this.get('shoppingCart').remove(product);
      this.get('shoppingCart').removeFromTotal(product.data.price);
    },
    checkOut(cartItems) {
      this.get('shoppingCart').reset(cartItems);
      var returnMessage = "purchased";
      this.set('purchaseMessage', returnMessage);
      for(var i = 0; i = cartItems.length; i ++) {
        this.get('shoppingCart').removeFromCart(cartItems[0]);
      }
    }
  }
});
