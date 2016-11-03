import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    saveReview() {
     var params = {
       reviewTitle: this.get('reviewTitle'),
       author: this.get('author'),
       comment: this.get('comment'),
       date: moment(),
       product: this.get('product')
     };
     this.set('addNewReview', false);
     this.sendAction('saveReview', params);
   }
  }
});
