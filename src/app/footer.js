module.exports = {
  template: require('./footer.html'),
  controller: footerCtrl
};

function footerCtrl($scope, $window) {
  $scope.top = function () {
    $window.scrollTo(0, 0);
  };
}
