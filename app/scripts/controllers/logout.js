'use strict';

/**
 * @ngdoc function
 * @name angularJwtApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the angularJwtApp
 */
angular.module('angularJwtApp')
  .controller('LogoutCtrl', function (authToken, $state) {
    authToken.removeToken();
    $state.go('main');
  });
