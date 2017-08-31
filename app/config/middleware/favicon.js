const { join } = require('path');
const favicon = require('koa-favicon');

const basePath = process.env.BASE;
const appPath = process.env.APP;

const pathToFavicon = join(
    basePath,
    appPath,
    'public/images/favicons/16x16.png'
);

module.exports = () => favicon(pathToFavicon);