angular
  .module('app')
  .component('fountainFooter', {
    templateUrl: 'app/footer.html',
    controller: footerCtrl
  });

function footerCtrl($scope, $log, $window) {
  $scope.$log = $log;

  $scope.top = function () {
    $window.scrollTo(0, 0);
  };
}
