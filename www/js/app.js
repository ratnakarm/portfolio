// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.portfolio', {
      url: "/portfolio",
      views: {
        'menuContent' :{
          templateUrl: "templates/portfolio.html",
          controller:'PortCtrl'
        }
      }
    })
    .state('app.about', {
      url: "/about",
      views: {
        'menuContent' :{
          templateUrl: "templates/about.html",
          controller:'AboutCtrl'
        }
      }
    })
    .state('app.ourteam', {
      url: "/ourteam",
      views: {
        'menuContent' :{
          templateUrl: "templates/ourteam.html",
          controller:'OurteamCtrl'
        }
      }
    })
    .state('app.client', {
      url: "/client",
      views: {
        'menuContent' :{
          templateUrl: "templates/client.html",
          controller:'ClientCtrl'
        }
      }
    })

    .state('app.contact', {
      url: "/contact",
      views: {
        'menuContent' :{
          templateUrl: "templates/contact.html",
          controller:'ContactCtrl'
        }
      }
    })

        .state('app.santos', {
      url: "/santos",
      views: {
        'menuContent' :{
          templateUrl: "templates/santos.html"
        }
      }
    })

        .state('app.phani', {
      url: "/phani",
      views: {
        'menuContent' :{
          templateUrl: "templates/phani.html"
        }
      }
    })

        .state('app.ratnakar', {
      url: "/ratnakar",
      views: {
        'menuContent' :{
          templateUrl: "templates/ratnakar.html"
        }
      }
    })

        .state('app.sandeep', {
      url: "/sandeep",
      views: {
        'menuContent' :{
          templateUrl: "templates/sandeep.html"
        }
      }
    })

        .state('app.sudhakar', {
      url: "/sudhakar",
      views: {
        'menuContent' :{
          templateUrl: "templates/sudhakar.html"
        }
      }
    })

     
      
        .state('app.port1', {
      url: "/port1",
      views: {
        'menuContent' :{
          templateUrl: "templates/port1.html",
          controller:'Port1Ctrl'
        }
      }
    })
        .state('app.port1logo', {
      url: "/port1logo/:logoId",
      views: {
        'menuContent' :{
          templateUrl: "templates/port1logo.html",
          controller:'Port1logoCtrl'
        }
      }
    })
        .state('app.port2', {
      url: "/port2",
      views: {
        'menuContent' :{
          templateUrl: "templates/port2.html"
        }
      }
    })
        .state('app.port3', {
      url: "/port3",
      views: {
        'menuContent' :{
          templateUrl: "templates/port3.html",
          controller:'Port3Ctrl'
        }
      }
    })
        .state('app.port4', {
      url: "/port4",
      views: {
        'menuContent' :{
          templateUrl: "templates/port4.html"
        }
      }
    })
        .state('app.port5', {
      url: "/port5",
      views: {
        'menuContent' :{
          templateUrl: "templates/port5.html"
        }
      }
    })
       ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/portfolio');
});

