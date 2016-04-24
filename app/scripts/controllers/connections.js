'use strict';

/**
 * @ngdoc function
 * @name angularJwtApp.controller:ConnectionsCtrl
 * @description
 * # ConnectionsCtrl
 * Controller of the angularJwtApp
 */
angular.module('angularJwtApp')
  .controller('ConnectionsCtrl', function () {
    this.connections = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
