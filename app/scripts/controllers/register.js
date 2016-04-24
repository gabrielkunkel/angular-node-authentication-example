'use strict';

/**
 * @ngdoc function
 * @name angularJwtApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the angularJwtApp
 */
angular.module('angularJwtApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $http, alert, authToken) {
    
    $scope.submit = function () {
      var url = 'http://localhost:3000/register';
      var user = {
        email: $scope.email,
        password: $scope.password
      };

      $http.post(url, user)
        .success(function (res) {
          alert('success', 'Great!', 'Now, you are registered! :-)');
          authToken.setToken(res.token);
        })
        .error(function () {
          alert('warning', 'Oops!', 'Embarrassing... There\'s a problem on our end. Try, again, later.');
        });
    };

  });
