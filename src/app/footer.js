angular
  .module('app')
  .component('fountainFooter', {
    templateUrl: 'app/footer.html',
    controller: footerCtrl
  });

function footerCtrl($scope, $log) {
  $scope.$log = $log;
  $log.log('Fuck yeah I found it');
}
