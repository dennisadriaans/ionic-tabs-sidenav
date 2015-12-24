app.controller('MainCtrl', function($scope) {

    $scope.fixedHeader = false;

    $scope.$on('open-nav', function() {
        $scope.fixedHeader = true;
    });
})