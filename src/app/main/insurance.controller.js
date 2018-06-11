(function(){
  'use strict';

  angular
    .module('dogBite')
    .controller('InsuranceController', InsuranceController);

  function InsuranceController($log, $stateParams){
    var vm = this;
    var dog = $stateParams.dog;
    var ins = $stateParams.insurance;
    $log.log(dog, ins);
  }
})();
