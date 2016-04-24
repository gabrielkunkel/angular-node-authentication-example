/**
 * Created by gabrielkunkel on 4/18/16 in JavaScript.
 */
'use strict';

angular
  .module('angularJwtApp').config(function ($urlRouterProvider, $stateProvider, $httpProvider) {

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

      .state('connections', {
        url: '/connections',
        templateUrl: '/views/connections.html',
        controller: 'ConnectionsCtrl'
      })

      .state('logout', {
        url: '/logout',
        controller: 'LogoutCtrl'
      })

    ;

  $httpProvider.interceptors.push('authInterceptor');
  
})

.constant('API_URL', 'http://localhost:3000/')

;