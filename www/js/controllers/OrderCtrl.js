app.controller('OrderCtrl', function($scope, $state, Products, Orders, $http, $ionicPopup) {

    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

    //define selected client
    $scope.selectedClient = $state.params.id;

    //query to db
    $scope.products = Products.query();

    //make a order
    //add products      total + added.product.price
    var selected = [];
    $scope.newOrder = {};
    $scope.newOrder.price = '';

    $scope.clicked = function (product) {
        var index = selected.indexOf(product);
        if (index > -1) {
            product.selected = false;
            selected.splice(index, 1);
            $scope.newOrder.price = $scope.newOrder.price*1 - product.price*1;
        } else {
            product.selected = true;
            selected.push(product);
            $scope.newOrder.price = $scope.newOrder.price*1 + product.price*1;
        }
        console.log($scope.newOrder.price);
    }
    $scope.selected = selected;
    $scope.newOrder.products = selected;
    $scope.newOrder.client = $scope.selectedClient;

    $scope.payment = function(method, price) {
        $scope.newOrder.price = price;
        $scope.newOrder.method = method;
        Orders.save($scope.newOrder);
        $scope.showAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: '<strong>Betaling gelukt!</strong>',
                template: 'De betaling is opgeslagen.'
            });

            $scope.orders.push({'e': $scope.newOrder});
            console.log($scope.orders);

            alertPopup.then(function(res) {
                console.log('Thank you for not eating my delicious ice cream cone');
            });
        };
        $scope.showAlert();
    }

    $scope.orders = Orders.query();
    console.log($scope.orders);

    $scope.watchOrder = function(id) {
        Orders.get({id: id}).$promise.then(function(order) {

            var alertPopup = $ionicPopup.alert({
                title: order.client.name,
                template: '{order descroption}'
            });

            alertPopup.then(function(res) {
                console.log('Thank you for not eating my delicious ice cream cone');
            });
        });
    }

    //var total count
    //var btw
    //var

    //finish order by pin or chash

    //button new order or to overview


    //count total

    //add tax


})