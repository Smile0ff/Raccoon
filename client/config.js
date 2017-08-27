const { resolve } = require('path');

const base = './';

const config = {
    css: resolve(base, 'assets/css'),
    js: resolve(base, 'assets/js'),
    fonts: resolve(base, 'assets/fonts'),
    images: resolve(base, 'assets/images'),
    build: resolve(base, '../app/public')
}

module.exports = config;