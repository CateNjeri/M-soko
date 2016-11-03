import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['date:desc'],
  sortedReviews: Ember.computed.sort('product.reviews', 'sortBy'),
  shoppingCart: Ember.inject.service(),
  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
      this.get('shoppingCart').cartTotal(item.data.price);
    },
    saveReview(params) {
      this.sendAction('saveReview', params);
    }
  }
});
