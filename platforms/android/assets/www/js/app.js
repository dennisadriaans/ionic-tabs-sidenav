var app = angular.module('starter', ['ionic', 'ngResource']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
  });
})

app.config(function($httpProvider) {
    // We need to setup some parameters for http requests
    // These three lines are all you need for CORS support
})

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.client', {
    url: '/client',
    views: {
      'tab-client': {
        templateUrl: 'templates/client-select.html',
        controller: 'ClientCtrl'
      }
    }
  })

  .state('tab.order', {
      url: '/order/:id',
      views: {
        'tab-order': {
          templateUrl: 'templates/new-order.html',
          controller: 'OrderCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/client');

});

app.filter('myDateFormat', function myDateFormat($filter){
    return function(text){
        var  tempdate= new Date(text.replace(/-/g,"/"));
        return $filter('date')(tempdate, "MMM dd");
    }
});
