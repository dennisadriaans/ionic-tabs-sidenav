app.controller('MainCtrl', function($scope) {

    $scope.fixedHeader = false;

    $scope.$on('open-nav', function() {
        $scope.fixedHeader = true;
    });

    $scope.hideNav = function() {
        $scope.fixedHeader = false;
    }
})