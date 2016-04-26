'use strict';

/**
 * @ngdoc service
 * @name angularJwtApp.auth
 * @description
 * # auth
 * Service in the angularJwtApp.
 */
angular.module('angularJwtApp')
  .service('auth', function auth($http, API_URL, authToken) {
    var url = API_URL + 'login';

    this.login = function (email, password) {
      return $http.post(url, {
        email: email,
        password: password
      }).then(function (res) {
        console.log(res.data.token);
        authToken.setToken(res.data.token);
      });
      
    };

    // AngularJS will instantiate a singleton by calling "new" on this function
  });
