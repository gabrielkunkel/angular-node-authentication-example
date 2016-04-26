'use strict';

/**
 * @ngdoc function
 * @name angularJwtApp.controller:ConnectionsCtrl
 * @description
 * # ConnectionsCtrl
 * Controller of the angularJwtApp
 */
angular.module('angularJwtApp')
  .controller('ConnectionsCtrl', function ($scope, $http, API_URL) {

    $scope.loveConnections = ['Connections have not yet been acquired'];

    $http.get(API_URL + 'connections').then(function (response) {
      $scope.loveConnections = response.data;
    }).catch(function(err) {
      console.log(err);
    });

  });
