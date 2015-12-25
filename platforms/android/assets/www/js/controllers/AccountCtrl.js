app.controller('AccountCtrl', function($scope, Clients, $ionicPopup, $http, Orders, $state, $window) {

    /* for local only */
    /* for local only */
    //$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    //$http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

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

    $scope.months = [
        {
            number: 1,
            month: 'January'
        },
        {
            number: 2,
            month: 'February'
        },
        {
            number: 3,
            month: 'March'
        },
        {
            number: 4,
            month: 'April'
        },
        {
            number: 5,
            month: 'May'
        },
        {
            number: 6,
            month: 'June'
        },
        {
            number: 7,
            month: 'July'
        },
        {
            number: 8,
            month: 'August'
        },
        {
            number: 9,
            month: 'September'
        },
        {
            number: 10,
            month: 'October'
        },
        {
            number: 11,
            month: 'November'
        },
        {
            number: 12,
            month: 'December'
        }
    ];

    $scope.showPastSeven = function() {
        $http.get('http://dennis-adriaansen.nl/orders-past-seven')
            .success(function(result) {
                $scope.orders = result.orders;
                $scope.revenue = result.revenue;
            });
    }

    $scope.showThisMonth = function() {
        $http.get('http://dennis-adriaansen.nl/orders-this-month')
            .success(function(result) {
                $scope.orders = result.orders;
                $scope.revenue = result.revenue;
        });
    }

    $scope.orderByMonth = function(number) {
        $http.post('http://dennis-adriaansen.nl/orders-by-month/'+number)
            .success(function(result) {
                $scope.orders = result.orders;
                $scope.revenue = result.revenue;
            });
    }

    $scope.showThisYear = function() {
        $http.get('http://dennis-adriaansen.nl/orders-this-year')
            .success(function(result) {
                $scope.orders = result.orders;
                $scope.revenue = result.revenue;
            });
    }

    $scope.showLastYear = function() {
        $http.get('http://dennis-adriaansen.nl/orders-last-year')
            .success(function(result) {
                $scope.orders = result.orders;
                $scope.revenue = result.revenue;
            });
    }

    $scope.showToday = function() {
        $http.get('http://dennis-adriaansen.nl/orders-today')
            .success(function(result) {
                $scope.orders = result.orders;
                $scope.revenue = result.revenue;
            });
    }
});

