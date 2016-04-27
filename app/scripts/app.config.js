/**
 * Created by gabrielkunkel on 4/18/16 in JavaScript.
 */
'use strict';

angular
  .module('angularJwtApp').config(function ($urlRouterProvider,
                                            $stateProvider,
                                            $httpProvider,
                                            $authProvider,
                                            API_URL) {

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

      .state('login', {
        url: '/login',
        templateUrl: '/views/login.html',
        controller: 'LoginCtrl'
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

  $authProvider.google({
    clientId: '175470426515-2q7t6uktktmtm7soenalod1vmt7jvh1e.apps.googleusercontent.com',
    url: API_URL + 'auth/google'
  });

  $httpProvider.interceptors.push('authInterceptor');
  
})

.constant('API_URL', 'http://localhost:3000/')

;