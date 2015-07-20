import DS from 'ember-data';

// export default DS.FixtureAdapter.extend({
//   shouldReloadAll: function() {
//     return true;
//   }
// });

export default DS.RESTAdapter.extend({
  namespace: 'api/',
  host: 'http://localhost:4500'
});

