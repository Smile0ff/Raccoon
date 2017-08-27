const Router = require('koa-router');
const router = new Router();

const { throwInternalServerException, throwForbiddenException, throwNotFoundException } = require('./exceptions/http');

const Test = require('@models/test');

const home = async (ctx, next) => {
    

    await ctx.render('home');
}

const about = async (ctx, next) => {


    await ctx.render('about');
}

router
    .get('home', '/', home)
    .get('about', '/about', about);

module.exports = router;