const { resolve } = require('path');
const static = require('koa-static');

const appPath = process.env.APP;
const staticPath = process.env.STATIC;

const pathToStatic = resolve(appPath, staticPath);

const options = {};

module.exports = () => static(pathToStatic, options);