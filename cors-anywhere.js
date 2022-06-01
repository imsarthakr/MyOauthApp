var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 7777;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function () {
    console.log('Running CORS on to allow cross origin ' + host + ':' + port);
});