'use strict';

/**
 * @ngdoc function
 * @name angularJwtApp.controller:HeaderctrlCtrl
 * @description
 * # HeaderctrlCtrl
 * Controller of the angularJwtApp
 */
angular.module('angularJwtApp')
  .controller('HeaderCtrl', function ($scope, authToken) {
    $scope.isAuthenticated = authToken.isAuthenticated;
    
    
    
  });
