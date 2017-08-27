const { join } = require('path');

const config = require('../config');

const entries = {
    home: join(config.js, 'pages/home')
}

module.exports = entries;