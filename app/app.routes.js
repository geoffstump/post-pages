(function() {
  'use strict';

  angular
    .module('RADGPostAdmin')
    .config(routeConfig);

  function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'app/layout/index.html'
      })
      .state('page', {
          url: '/page',
          templateUrl: 'app/postPages/create.html'
      });
  };
})();
