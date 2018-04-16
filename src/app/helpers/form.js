angular
  .module('app')
  .component('fountainForm', {
    templateUrl: 'app/helpers/form.html'
  });

function formCtrl($scope, $log) {
  $scope.$log = $log;
  
}
