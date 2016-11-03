import DS from 'ember-data';

export default DS.Model.extend({
  reviewTitle: DS.attr(),
  author: DS.attr(),
  comment: DS.attr(),
  date: DS.attr('string'),
  product: DS.belongsTo('product', {async: true})
});
