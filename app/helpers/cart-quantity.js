import Ember from 'ember';

export function cartQuantity(params) {
  var cartItem = params[0];
  if(cartItem.get('quantity') > 1) {
    return new Ember.String.htmlSafe('<h6> Quantity: ' + cartItem.get('quantity') + '</h6>');
  }
}

export default Ember.Helper.helper(cartQuantity);
