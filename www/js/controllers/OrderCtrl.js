app.controller('OrderCtrl', function($scope, $state, Products, Orders, $http, $ionicPopup, $window) {

    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

    //define selected client
    $scope.selectedClient = $state.params.id;

    //query to db
    $scope.products = Products.query();
    $scope.orders = Orders.query();

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

            alertPopup.then(function(res) {
                $window.location.reload();
                $state.go('tab.account');
            });
        };
        $scope.showAlert();
    }


    //var total count
    //var btw
    //var

    //finish order by pin or chash

    //button new order or to overview


    //count total

    //add tax


})