app.controller('AccountCtrl', function($scope, Clients, $ionicPopup, $http, Orders, $state, $window) {

    $scope.orders = Orders.query();
    $scope.fixedHeader = false;

    $scope.watchOrder = function(id) {
        Orders.get({id: id}).$promise.then(function(order) {

            $scope.order = order;

            var alertPopup = $ionicPopup.alert({
                title: '<h1>'+order.client.name+'</h1>',
                templateUrl: 'templates/product-list.html',
                scope: $scope,
                buttons: [
                    {
                        text: 'Sluiten'
                    }
                ]
            });

            alertPopup.then(function(res) {
                console.log('Thank you for not eating my delicious ice cream cone');
            });
        });
    }
});
