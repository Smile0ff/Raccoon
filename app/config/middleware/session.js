const session = require('koa-session');

const options = {
    key: process.env.COOKIE_SECRET,
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false
}

module.exports = (app) => session(options, app);