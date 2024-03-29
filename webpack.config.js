const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: "./src/index.js",
	mode: "production",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				options: { presets:["@babel/env"] }
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.(jpe?g|png|gif|woff|woff2|eot|otf|ttf|svg)(\?[a-z0-9=.]+)?$/,
			    loader: 'url-loader?limit=10000'
			},
			{
				test: /\.(jpg|png|svg)$/,
				loader: 'image-webpack-loader'
			}
		]
	},
	resolve: { extensions: ["*", ".js", ".jsx"] },
	output: {
		path: path.resolve(__dirname, "dist/"),
		filename: "bundle.js",
		publicPath: '/'
	},
	devServer: {
		contentBase: path.join(__dirname, "dist/"),
		port: 3000,
		publicPath: "http://localhost:3000/dist/",
		hotOnly: true,
		historyApiFallback: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
		    favicon: "./src/assets/img/favicon.png",
		    template: 'public/index.html'
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'public/fonts', to: 'fonts' }
			]
		})
	]
};