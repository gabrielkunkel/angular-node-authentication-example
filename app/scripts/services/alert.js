'use strict';

/**
 * @ngdoc service
 * @name angularJwtApp.alert
 * @description
 * # alert
 * Service in the angularJwtApp.
 */
angular.module('angularJwtApp')
  .service('alert', function ($rootScope, $timeout) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var alertTimeout;

    return function (type, title, message, timeout) {
      $rootScope.alert = {
        hasBeenShown: true,
        show: true,
        type: type,
        message: message,
        title: title
      };
      
      $timeout.cancel(alertTimeout);
      alertTimeout = $timeout(function () {
        $rootScope.alert.show = false;
      }, timeout || 2000);
    };
  });
