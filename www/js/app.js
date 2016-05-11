// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    
    $ionicPlatform.registerBackButtonAction(function(event){
    	  event.preventDefault();
    	}, 100);
  });
})

.config(function($stateProvider, $urlRouterProvider) {
	
  $stateProvider

   .state('pg1', {
      url: "/pg1",
      templateUrl: "templates/pg1.html"
  })
  
   .state('pg2', {
      url: "/pg2",
      templateUrl: "templates/pg2.html"
  })
  
   .state('pg3', {
      url: "/pg3",
      templateUrl: "templates/pg3.html"
  })
  
   .state('pg4', {
      url: "/pg4",
      templateUrl: "templates/pg4.html"
  })
  
  .state('pg5', {
      url: "/pg5",
      templateUrl: "templates/pg5.html"
  })
  
   .state('pg6', {
      url: "/pg6",
      templateUrl: "templates/pg6.html"
  })
  
     .state('pg7', {
      url: "/pg7",
      templateUrl: "templates/pg7.html"
  })


  $urlRouterProvider.otherwise('/pg1');

});
