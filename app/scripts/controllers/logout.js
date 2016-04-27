'use strict';

/**
 * @ngdoc function
 * @name angularJwtApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the angularJwtApp
 */
angular.module('angularJwtApp')
  .controller('LogoutCtrl', function ($state, $auth, authToken) {
    authToken.removeToken();
    $auth.logout();
    $state.go('main');
  });
