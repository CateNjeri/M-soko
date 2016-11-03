import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  seasonal: DS.attr(),
  price: DS.attr('number'),
  image: DS.attr(),
  type: DS.attr(),
  quantity: DS.attr('number'),
  reviews: DS.hasMany('review', {async: true})
});
