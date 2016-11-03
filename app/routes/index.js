import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash ({
      products: this.store.findAll('product'),
      reviews: this.store.findAll('review')
    });
  }
});
