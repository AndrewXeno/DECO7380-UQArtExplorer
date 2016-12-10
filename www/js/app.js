// Ionic Starter App 

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ionic-audio'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
      if (cordova.platformId === 'ios' && window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.tour-main', {
    url: '/tour/main',
    views: {
      'tab-tour': {
        templateUrl: 'templates/tab-tour.html',
        controller: 'TourCtrl'
      }
    }
  })

  .state('tab.tour-welcome', {
    url: '/tour',
    views: {
      'tab-tour': {
        templateUrl: 'templates/tab-tour-welcome.html',
        controller: 'TourCtrl'
      }
    }
  })

  .state('tab.browse', {
      url: '/browse',
      views: {
          'tab-browse': {
              templateUrl: 'templates/tab-browse.html',
              controller: 'BrowseCtrl'
          }
      }
  })

  .state('tab.collection', {
      url: '/collection',
      views: {
          'tab-collection': {
          templateUrl: 'templates/tab-collection.html',
          controller: 'CollectionCtrl'
        }
      }
    })



  .state('tab.settings', {
      url: '/settings',
    views: {
      'tab-settings': {
          templateUrl: 'templates/tab-settings.html',
        controller: 'SettingsCtrl'
      }
    }
  })

  .state('tab.home-detail', {
    url: '/home/:collectionId',
    views: {
      'tab-home': {
        templateUrl: 'templates/artwork-detail.html',
        controller: 'CollectionDetailCtrl'
      }
    }
  })

  .state('tab.collection-detail', {
    url: '/collection/:collectionId',
    views: {
      'tab-collection': {
        templateUrl: 'templates/artwork-detail.html',
        controller: 'CollectionDetailCtrl'
      }
    }
  })

  .state('tab.tour-detail', {
    url: '/tour/:collectionId',
    views: {
      'tab-tour': {
        templateUrl: 'templates/artwork-detail.html',
        controller: 'CollectionDetailCtrl'
      }
    }
  })

  .state('tab.results', {
    url: '/results',
    views: {
      'tab-browse': {
        templateUrl: 'templates/tab-results.html',
        controller: 'ResultsCtrl'
      }
    }
  })

  .state('tab.results-detail', {
    url: '/results/:collectionId',
    views: {
      'tab-browse': {
        templateUrl: 'templates/artwork-detail.html',
        controller: 'CollectionDetailCtrl'
      }
    }
  })

  .state('tab.artwork-map', {
    url: '/artwork-map',
    views: {
      'tab-browse': {
        templateUrl: 'templates/artwork-detail-map.html',
        controller: 'CollectionDetailCtrl'
      }
    }
  })

  .state('tab.tour-map', {
    url: '/tour-map',
    views: {
      'tab-tour': {
        templateUrl: 'templates/tab-tour-map.html',
        controller: 'TourMapStaticCtrl'
      }
    }
  })

  .state('tab.exhibition-detail', {
    url: '/home/exhibitions/:exhibitionId',
    views: {
      'tab-home': {
        templateUrl: 'templates/exhibition-detail.html',
        controller: 'ExhibitionDetailCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
