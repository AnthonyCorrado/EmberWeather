import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    authWithGoogle: function() {
      var _this = this;
      var session = this.get('session');
      session.authenticate('simple-auth-authenticator:torii', 'google-oauth2')
        .then(function() {
          var authCode = _this.get('session.content.secure.authorizationCode');
          console.log(authCode);
          routeAfterAuthentication: 'forecasts';
          // console.log(authCode);
        });
      return;
    }
  }
});