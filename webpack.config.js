var webpack = require('webpack');

module.exports = {
    entry: './js/app.js',
    output: {
        path: __dirname + '/dest',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react']
            }
        }]
    }
}