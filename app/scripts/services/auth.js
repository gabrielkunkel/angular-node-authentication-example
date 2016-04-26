'use strict';

/**
 * @ngdoc service
 * @name angularJwtApp.auth
 * @description
 * # auth
 * Service in the angularJwtApp.
 */
angular.module('angularJwtApp')
  .service('auth', function auth($http, $state, alert, API_URL, authToken) {
    var url = API_URL + 'login';

    function authSuccessful(res) {
      alert('success', 'Joy!', 'Welcome, ' + res.data.user.email + '.');
      authToken.setToken(res.data.token);
      $state.go('connections');
    }

    function authError(err) {
      alert('warning', 'Something went wrong: ' + err.message);
    }

    this.login = function (email, password) {
      return $http.post(url, {
        email: email,
        password: password
      }).then(function (res) {
        alert('success', 'Joy!', 'Welcome, ' + res.data.user.email + '.');
        authToken.setToken(res.data.token);
        $state.go('connections');
      }).catch(function (err) {
        alert('warning', 'Something went wrong. ', err.message);
      });
    };

    this.register = function (email, password) {
      return $http.post(API_URL + 'register', {
        email: email,
        password: password
      }).then(authSuccessful)
        .catch(authError);
    };

    // AngularJS will instantiate a singleton by calling "new" on this function
  });
