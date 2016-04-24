'use strict';

/**
 * @ngdoc function
 * @name angularJwtApp.controller:ConnectionsCtrl
 * @description
 * # ConnectionsCtrl
 * Controller of the angularJwtApp
 */
angular.module('angularJwtApp')
  .controller('ConnectionsCtrl', function ($scope, $http, API_URL, alert) {

    $scope.loveConnections = ['Connections have not yet been acquired'];

    $http.get(API_URL + 'connections').then(function (response) {
      $scope.loveConnections = response.data;
      alert('success', 'We got yo\' connections, baby!');
    }).catch(function(err) {
      alert('warning', 'Unable to get your connections', err.message);
    });

  });
