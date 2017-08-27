const { join } = require('path');

const config = require('../config');

const aliases = {
    '@root': config.js,
    '@pages': join(config.js, 'pages'),
    '@containers': join(config.js, 'containers'),
    '@components': join(config.js, 'components'),
    '@utils': join(config.js, 'utils')
}

module.exports = aliases;