app.factory('Products', function($resource) {
    return $resource('http://dennis-adriaansen.nl/rest/products/:id', null, {
        'update': {
            method: 'PUT'
        }
    });
});