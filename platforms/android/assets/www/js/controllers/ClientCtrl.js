app.controller('ClientCtrl', function($scope, Clients, $ionicPopup, $http, $state) {

    /* for local only */
    //$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    //$http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

    //get cli
    //$scope.client = Clients.get({id: id});ents
    $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

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

        $scope.$emit('open-nav');
        $state.go('tab.order', {id: client.id});

    }

});