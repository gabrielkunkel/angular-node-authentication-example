'use strict';

/**
 * @ngdoc function
 * @name angularJwtApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularJwtApp
 */
angular.module('angularJwtApp')
  .controller('LoginCtrl', function ($scope, alert, auth) {

  $scope.submit = function () {

    auth.login($scope.email, $scope.password);

  };

  });
