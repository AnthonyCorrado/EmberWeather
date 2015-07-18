import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('forecasts', { path: '/' });
  this.route('forecasts');
});

export default Router;
