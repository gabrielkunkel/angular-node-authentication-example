'use strict';

/**
 * @ngdoc function
 * @name angularJwtApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the angularJwtApp
 */
angular.module('angularJwtApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $http, API_URL, alert, authToken) {
    
    $scope.submit = function () {
      var url = API_URL + 'register';
      var user = {
        email: $scope.email,
        password: $scope.password
      };

      $http.post(url, user)
        .success(function (data) {
          alert('success', 'Account Created!', 'Welcome, ' + data.user.email + '!');
          authToken.setToken(data.token);
        })
        .error(function () {
          alert('warning', 'Oops!', 'Embarrassing... There\'s a problem on our end. Try, again, later.');
        });
    };

  });
