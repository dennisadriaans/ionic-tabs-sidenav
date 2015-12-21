app.factory('Clients', function($resource) {
    return $resource('http://dennis-adriaansen.nl/rest/clients/:id', null, {
        'update': {
            method: 'PUT'
        }
    });
});