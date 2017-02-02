import Ember from 'ember';

export default Ember.Route.extend({
  model:function() {
    //  return Ember.RSVP.hash ({
      //    this.store.push({
      //    "title": "Hot Red Pepper",
      //  "description": "Red chilli, to spice up your to your desired level of hotness.",
      //  "seasonal": "true",
      //  "price": "1.00",
      //  "image": "/assets/img/chilli.jpg",
      //  "type": "Spice",
      //  "quantity": "0"})
      // vegetables: this.store.findAll('product.vegetables'),
      // fruits: this.store.findAll('product.fruits'),
      // review: this.store.findAll('product.review')
    // });
    return $.getJSON("product.json");
  }
});
