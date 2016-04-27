'use strict';

/**
 * @ngdoc function
 * @name angularJwtApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularJwtApp
 */
angular.module('angularJwtApp')
  .controller('LoginCtrl', function ($scope, $auth, auth, alert) {

    $scope.submit = function () {
      auth.login($scope.email, $scope.password);
    };

    $scope.authenticate = function (provider) {
      $auth.authenticate(provider).then(function (res) {
        alert('success', 'Welcome!', res.data.user.displayName + ', you\'re one of our favorites!');
      }, handleError);
    };

    function handleError(err) {
      alert('warning', 'Something went wrong: ', err.message);
    }


  });
