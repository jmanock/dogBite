(function() {
  'use strict';

  angular
    .module('dogBite')
    .controller('FormController', FormController);

  /** @ngInject */
  function FormController() {
    var vm = this;
    vm.states = states;
    vm.breeds = breeds;
  }
})();

var states = [
  'Il',
  'Fl',
  'Ga'
];

var breeds = [
  'one',
  'two',
  'three'
];
