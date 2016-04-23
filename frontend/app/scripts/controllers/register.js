'use strict';

/**
 * @ngdoc function
 * @name angularJwtApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the angularJwtApp
 */
angular.module('angularJwtApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $http, alert) {
    
    $scope.submit = function () {
      var url = '/';
      var user = {};

      $http.post(url, user)
        .success(function (res) {
          alert('success', 'Great!', 'Now, you are registered! :-)');
        })
        .error(function (err) {
          alert('warning', 'Oops!', 'Embarrassing... There\'s a problem on our end. Try, again, later.');
        })
    }

  });
