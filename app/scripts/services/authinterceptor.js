'use strict';

/**
 * @ngdoc service
 * @name angularJwtApp.authInterceptor
 * @description
 * # authInterceptor
 * Factory in the angularJwtApp.
 */
angular.module('angularJwtApp').factory('authInterceptor', function (authToken) {

    return {
      request: function(config) {
        var token = authToken.getToken();

        if (token) {
          config.headers.Authorization = 'Bearer ' + token;
        }

        return config;
      },

      response: function (response) {
        return response;
      }
    };
  });
