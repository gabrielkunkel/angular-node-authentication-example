'use strict';

/**
 * @ngdoc function
 * @name angularJwtApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularJwtApp
 */
angular.module('angularJwtApp')
  .controller('LoginCtrl', function ($scope, $auth, $state, auth, alert) {

    $scope.submit = function () {
      auth.login($scope.email, $scope.password);
    };

    $scope.authenticate = function (provider) {
      $auth.authenticate(provider).then(function (res) {
        alert('success', 'Welcome!', res.data.user.displayName + ', you\'re one of our favorites!');
        $state.go('connections');
      }, handleError);
    };

    function handleError(err) {
      console.log('Error: ' + err);
    }


  });
