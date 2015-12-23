app.controller('ClientCtrl', function($scope, Clients, $ionicPopup, $http, $state) {

    //get cli
    //$scope.client = Clients.get({id: id});ents
    $scope.clients = Clients.query();
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

    //make selected product object

    //hold scope selected products

    //add new client
        //openpopup
        $scope.showPopup = function() {
            $scope.client = {};

            var myPopup = $ionicPopup.show({
                template: '<input type="text" ng-model="client.nName">',
                title: 'Voeg nieuwe klant toe',
                subTitle: 'Vul hier de naam van de klant in.',
                scope: $scope,
                buttons: [
                    { text: 'Cancel' },
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            if (!$scope.client.nName) {
                                //don't allow the user to close unless he enters wifi password
                                e.preventDefault();
                            } else {
                                return $scope.client.nName;
                            }
                        }
                    }
                ]
            });
            myPopup.then(function(res) {
                Clients.save({name: res});
            });
        }

    //pass client to ordercontroller
    $scope.selectClient = function(client) {
        $scope.selectedClient = client;
        $state.go('tab.order', {id: client.id});
    }

});