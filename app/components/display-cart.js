import Ember from 'ember';

export default Ember.Component.extend({
  purchaseMessage: "",
  shoppingCart: Ember.inject.service(),
  actions: {
    removeFromCart(product) {
      this.get('shoppingCart').remove(product);
      this.get('shoppingCart').removeFromTotal(product.data.price);
    },
    checkOut() {
      this.get('shoppingCart').checkOutItems();
      var returnMessage = "purchased"
      var message = this.get('purchaseMessage');
      this.set('purchaseMessage', returnMessage);
    }
  }
});
