var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
	entry: [
		'./app/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: 'index_bundle.js'
	}, 
	devServer: {
		contentBase: './app'
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
		]
	},
	plugins: [
						new CopyWebpackPlugin([	
							{from: 'app/css', to: 'css'},
							{from: 'app/img', to: 'img'}
						]),
						HtmlWebpackPluginConfig]
};