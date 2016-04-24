/**
 * Created by gabrielkunkel on 4/18/16 in JavaScript.
 */
'use strict';

angular
  .module('angularJwtApp').config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('main', {
        url: '/',
        templateUrl: '/views/main.html'
      })

      .state('register', {
        url: '/register',
        templateUrl: '/views/register.html',
        controller: 'RegisterCtrl'
      })

      .state('logout', {
        url: '/logout',
        controller: 'LogoutCtrl'
      })
  
  ;
  
});