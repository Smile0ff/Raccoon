const Router = require('koa-router');
const router = new Router();

const { throwInternalServerException, throwForbiddenException, throwNotFoundException } = require('./exceptions/http');

const Test = require('@models/test');

const home = async (ctx, next) => {
    let testList = await Test.find({});

    if(!testList)
        throwNotFoundException();

    await ctx.render('home', {
        title: 'Home Page',
        testList
    });
}

const about = async (ctx, next) => {


    await ctx.render('about', {
        title: 'About page'
    });
}

router
    .get('home', '/', home)
    .get('about', '/about', about);

module.exports = router;