(function() {
  'use strict';

  angular
    .module('dogBite')
    .directive('acmeFooter', acmeFooter);

  /** @ngInject */
  function acmeFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/footer.html',
      scope: {
          creationDate: '='
      },
      controller: FooterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function FooterController($window) {
      var vm = this;
      vm.top = function() {
        $window.scrollTo(0,0);
      }
    }
  }

})();
