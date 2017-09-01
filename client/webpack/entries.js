const { join } = require('path');

const config = require('../config');

const entries = {
    home: join(config.js, 'pages/home'),
    about: join(config.js, 'pages/about'),
    showreel: join(config.js, 'pages/showreel'),
    contacts: join(config.js, 'pages/contacts'),
    order: join(config.js, 'pages/order')
}

module.exports = entries;