import DS from 'ember-data';

export default DS.FixtureAdapter.extend({
  shouldReloadAll: function() {
    return true;
  }
});
