const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // resolve: {
    //     extensions: ['', '.js', '.jsx']
    // },
    // entry: './js/app.js',
    entry: path.join(__dirname, 'js/app'),
    output: {
        path: path.join(__dirname, 'dest'),
        filename: 'app.bundle.js',
        publicPath: '/less/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react']
            },
            include: path.join(__dirname, 'js')
        },
        {
			test: /\.less$/,
			loader:  'style-loader!css-loader!less-loader'
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}]
    }
}