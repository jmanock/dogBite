(function() {
  'use strict';

  angular
    .module('dogBite')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/main/about.html'
      })
      .state('form', {
        url: '/form',
        templateUrl: 'app/main/form.html'
      })
      .state('privacy', {
        url: '/privacy',
        templateUrl: 'app/main/privacy.html'
      })
      .state('questions', {
        url: '/questions',
        templateUrl: 'app/main/questions.html',
        controller: 'QuestionsController',
        controllerAs: 'question'
      })
      .state('terms', {
        url: '/terms',
        templateUrl: 'app/main/terms.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
