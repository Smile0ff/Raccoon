const { join } = require('path');

const webpack = require('webpack');

const config = require('../config');

const entries = require('./entries');
const aliases = require('./aliases');
const plugins = require('./plugins');

const devConfig = {
    entry: entries,
    output: {
        path: join(config.build, 'js'),
        filename: '[name].bundle.min.js'
    },
    resolve: {
        alias: aliases,
        extensions: ['.js', '.es6', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: plugins,
    devtool: false
}

module.exports = devConfig;