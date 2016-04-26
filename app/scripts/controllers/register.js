'use strict';

/**
 * @ngdoc function
 * @name angularJwtApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the angularJwtApp
 */
angular.module('angularJwtApp')
  .controller('RegisterCtrl', function ($scope, $http, auth) {
    
    $scope.submit = function () {
      auth.register($scope.email, $scope.password);
    };

  });
