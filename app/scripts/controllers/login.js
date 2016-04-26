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

    auth.login($scope.email, $scope.password)
      .then(function (res) {
        alert('success', 'Welcome', 'Thanks for coming back' + res.data.user.email + '.');
      })
      .catch(function (err) {
        alert('warning', 'Something went wrong', err.data.message);
      });

  };


/*    $scope.submit = function () {
      var url = API_URL + 'login';
      var user = {
        email: $scope.email,
        password: $scope.password
      };

      $http.post(url, user)
        .success(function (data) {
          authToken.setToken(data.token);
          $state.go('connections');
        })
        .error(function (err) {
          alert('warning', 'Something went wrong.', err.message + '.');
        });
    };*/


  });
