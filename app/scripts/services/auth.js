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

    this.login = function (email, password) {
      return $http.post(url, {
        email: email,
        password: password
      }).then(function (res) {
        alert('success', 'Welcome', 'Thanks for coming back' + res.data.user.email + '.');
        authToken.setToken(res.data.token);
        $state.go('connections');
      }).catch(function (err) {
        alert('warning', 'Something went wrong', err.message);
      });
      
    };

    

    // AngularJS will instantiate a singleton by calling "new" on this function
  });
