(function() {
  'use strict';

  angular
    .module('dogBite')
    .controller('QuestionsController', QuestionsController);

  /** @ngInject */
  function QuestionsController($scope, $location, $anchorScroll) {
    var vm = this;

    vm.scrollTo = function(id){
      $location.hash(id);
      $anchorScroll();
    }
  }
})();
