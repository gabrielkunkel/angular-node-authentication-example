'use strict';

/**
 * @ngdoc service
 * @name angularJwtApp.authToken
 * @description
 * # authToken
 * Factory in the angularJwtApp.
 */
angular.module('angularJwtApp').factory('authToken', function ($window) {
    var storage = $window.localStorage;
    var cachedToken;



    return {
      setToken: function(token) {
        cachedToken = token;
        storage.setItem('userToken', token);
      },
      getToken: function() {
        if (!cachedToken) {
          cachedToken = storage.getItem('userToken');
        }
        return cachedToken;
      },
      isAuthenticated: function() {
        if(!cachedToken) {
          cachedToken = storage.getItem('userToken');
        }

        if (cachedToken) {
          return true;
        }
        else {
          return false;
        }
      }
    };
  });
