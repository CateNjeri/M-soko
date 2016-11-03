import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('product', params.product_id);
  },
  actions: {
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var product = params.product;
      product.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return product.save();
      });
      this.transitionTo('product', product);
    }
  }
});
