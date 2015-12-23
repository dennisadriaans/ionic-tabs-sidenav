app.factory('Orders', function($resource) {
    return $resource('http://dennis-adriaansen.nl/rest/orders/:id', null, {
        'update': {
            method: 'PUT'
        }
    });
});