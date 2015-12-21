app.controller('OrderCtrl', function($scope) {


    //define selected client

    //make a order
    //add products      total + added.product.price
    //delete products  total - deleted.product.price
    //var total count
    //var btw
    //var

    //finish order by pin or chash

    //button new order or to overview

    var selected = [];

    $scope.clicked = function (member) {
        var index = selected.indexOf(member);
        if (index > -1) {
            selected.splice(index, 1);
            member.selected = false;
        } else {
            selected.push(member);
            member.selected = true;
        }
    }
    $scope.selected = selected;

    //query to db
    $scope.items = [{
        name: "item1"
    }, {
        name: "item2"
    }, {
        name: "item3"
    }, {
        name: "item4"
    }, {
        name: "item5"
    }];


    //count total

    //add tax

    $scope.count = 1;
    console.log($scope.count);

    $scope.onSwipeLeft = function() {
    };
})