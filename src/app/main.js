module.exports = {
  template: require('./main.html'),
  controller: MainCtrl
};

function MainCtrl($scope) {
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
    if (y === 'home') {
      $scope.home = false;
      $scope.about = false;
      $scope.questions = false;
      $scope.privacy = false;
      $scope.quote = false;
      $scope.terms = false;
    } else if (y === 'about') {
      $scope.about = true;
      $scope.home = true;
      $scope.questions = false;
      $scope.privacy = false;
      $scope.quote = false;
      $scope.terms = false;
    } else if (y === 'questions') {
      $scope.questions = true;
      $scope.home = true;
      $scope.about = false;
      $scope.privacy = false;
      $scope.quote = false;
      $scope.terms = false;
    } else if (y === 'privacy') {
      $scope.privacy = true;
      $scope.home = true;
      $scope.about = false;
      $scope.questions = false;
      $scope.quote = false;
      $scope.terms = false;
    } else if (y === 'quote') {
      $scope.quote = true;
      $scope.home = true;
      $scope.about = false;
      $scope.questions = false;
      $scope.privacy = false;
      $scope.terms = false;
    } else {
      $scope.terms = true;
      $scope.about = false;
      $scope.home = true;
      $scope.questions = false;
      $scope.privacy = false;
      $scope.quote = false;
    }
  };
}
