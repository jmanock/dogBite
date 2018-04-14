angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('about', {
      url: '/about',
      templateUrl: '/app/helpers/about.html'
    })
    .state('questions', {
      url: '/questions',
      templateUrl: 'app/helpers/questions.html'
    })
    .state('quote', {
      url: '/quote',
      templateUrl: 'app/helpers/form.html'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'app/title.html'
    });
}
