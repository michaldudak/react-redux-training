var path = require('path');
var webpack = require('webpack');

module.exports = {
	context: path.resolve(__dirname, 'public'),
	resolve: {
		extensions: [ '.js', '.jsx' ]
	},
	entry: [
		'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
		'./scripts/index.js'
	],
	target: 'web',
	output: {
		publicPath: '',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{ test: /\.jsx?$/, exclude: /node_modules/, use: ['babel-loader'] },
			{ test: /\.(jpg|png)$/, exclude: /node_modules/, use: ['file-loader'] }
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	],
}