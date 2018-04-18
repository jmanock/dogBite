module.exports = {
  template: require('./main.html'),
  controller: MainCtrl
};

function MainCtrl($scope, $log) {
  $scope.click = function (x) {
    if (x === 'about') {
      $scope.home = true;
      $scope.about = true;
      $scope.questions = false;
      $scope.quote = false;
    } else if (x === 'quote') {
      $scope.home = true;
      $scope.about = false;
      $scope.quote = true;
      $scope.questions = false;
    } else if (x === 'home') {
      $scope.home = false;
      $scope.about = false;
      $scope.quote = false;
      $scope.questions = false;
    } else {
      $scope.home = true;
      $scope.about = false;
      $scope.quote = false;
      $scope.questions = true;
    }
  };
  $scope.top = function (y) {
    $log.log(y);
  };
}
