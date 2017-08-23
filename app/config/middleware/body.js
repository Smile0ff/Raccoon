const body = require('koa-body');

const options = {
    multipart: true
}

module.exports = () => body(options);