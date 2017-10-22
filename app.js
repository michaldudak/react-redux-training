"use strict";

var express = require('express');
var http = require('http');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser')
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config.js');

var products = require('./routes/products');
var orders = require('./routes/orders');

var app = express();
var router = express.Router();

app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(router);

var bundler = webpack(webpackConfig);

app.use(webpackDevMiddleware(bundler, {
	publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(bundler, {
	path: '/__webpack_hmr', heartbeat: 10000
}));

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

// routing
router.get('/products', products.getAll);
router.get('/orders', orders.getAll);
router.get('/orders/:id', orders.get);
router.post('/orders', orders.create);

var port = app.get('port');
http.createServer(app).listen(port, function() {
	console.log('Angular Store server listening on port ' + port);
});
