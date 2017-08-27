const { join } = require('path');

const webpack = require('webpack');

const config = require('../config');

const entries = require('./entries');
const aliases = require('./aliases');

const devConfig = {
    entry: entries,
    output: {
        path: join(config.build, 'js'),
        filename: '[name].bundle.dev.js'
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
    devtool: 'cheap-module-eval-source-map',
    cache: false
}

module.exports = devConfig;