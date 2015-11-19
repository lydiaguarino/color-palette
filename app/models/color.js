import DS from 'ember-data';

export default DS.Model.extend({
  hexcode: DS.attr('string'),
  name: DS.attr('string')
});
