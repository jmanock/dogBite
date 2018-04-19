(function() {
  'use strict';

  angular
    .module('dogBite')
    .controller('QuestionsController', QuestionsController);

  /** @ngInject */
  function QuestionsController($scope, $location, $anchorScroll, $log) {
    var vm = this;
    
    // m.scrollTo = function(id){
    //   // $location.hash(id);
    //   // $anchorScroll();
    //   $log.log(id);
    // };
    vm.scrollTo = function(id){
      $log.log(id);
    }
  }
})();
