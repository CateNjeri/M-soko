import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0,
  add(product) {
    if(product.get('quantity') === 0) {
      this.get('items').pushObject(product);
    }
    product.set('quantity', product.get('quantity') + 1);
  },
  cartTotal(price) {
    this.set('total', price + this.get('total'));
  },
  removeFromTotal(price) {
    this.set('total', this.get('total') - price);
  },
  remove(product) {
    if(product.get('quantity') === 1 ) {
      this.get('items').removeObject(product);
    }
    product.set('quantity', product.get('quantity') - 1);
  },
  checkOutItems() {
    var _this = this;
    this.set('total', this.get('total') * 0);
    this.get('items').forEach(function(item) {
      _this.get('items').removeObject(item);
      item.set('quantity', 0);
      console.log(item.get('title'));
    });
    // for(var i = 0; i < this.get('items.length'); i++) {
    //   _this.get('items').removeObject(this.get('items')[0]);
    //   this.get('items')[0].set('quantity', 0);
    // }
  }
});
