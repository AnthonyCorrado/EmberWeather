import DS from 'ember-data';

export default DS.Model.extend({
  cityName: DS.attr('string'),
  hiTemp: DS.attr('number'),
  loTemp: DS.attr('number'),
  currentTemp: DS.attr('number'),
  icon: DS.attr('string'),
  date: DS.attr('number')
});
