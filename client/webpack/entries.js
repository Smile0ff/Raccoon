const { join } = require('path');

const config = require('../config');

const entries = {
    home: join(config.js, 'pages/home'),
    about: join(config.js, 'pages/about')
}

module.exports = entries;