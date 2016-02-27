(function (app) { 

    'use strict';

    app.config(function($routeProvider, $locationProvider) {
      
      $routeProvider
        .when('/login', { 
          templateUrl: 'login.html',
          controller: 'LoginController'  
        })
        
        .when('/register', {
          templateUrl: 'register.html',
          controller: 'RegisterController'
        });

      // configure html5 to get links working on jsfiddle
      $locationProvider.html5Mode(true);

    });

}(app)); 