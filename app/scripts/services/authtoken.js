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
    var userToken = 'userToken';
    var authenticated;

    var authToken = {
      setToken: function(token) {
        cachedToken = token;
        storage.setItem(userToken, token);
        authenticated = true;
      },
      getToken: function() {
        if (!cachedToken) {
          cachedToken = storage.getItem(userToken);
        }
        return cachedToken;
      },
      isAuthenticated: function() {
        if(!cachedToken) {
          cachedToken = storage.getItem(userToken);
        }

        if (cachedToken) {
          authenticated = true;
        }

        else {
          authenticated = false;
        }

        return authenticated;
      },
      removeToken: function () {
        cachedToken = null;
        storage.removeItem(userToken);
        authenticated = false;
      }

    };

  return authToken;
  });
