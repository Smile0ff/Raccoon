const Router = require('koa-router');
const router = new Router();

const { throwInternalServerException, throwNotFoundException } = require('./exceptions/http');

const Meta = require('@models/meta');
const Project = require('@models/project');
const Media = require('@models/media');
const Staff = require('@models/staff');
const Partner = require('@models/partner');

const home = async (ctx, next) => {
    let meta = await Meta.findOne({ route: 'home' });

    if(!meta)
        throwInternalServerException('In order to display things correctly metadata must be filled');

    await ctx.render('home', {
        meta
    });
}

const about = async (ctx, next) => {
    let meta = await Meta.findOne({ route: 'about' }),
        projects = await Project.find({}),
        media = await Media.find({}),
        staff = await Staff.find({}),
        partners = await Partner.find({});

    if(!meta)
        throwInternalServerException('In order to display things correctly metadata must be filled');

    if(!projects.length)
        throwInternalServerException('In order to display things correctly at least one project must be created');

    if(!media.length)
        throwInternalServerException('In order to display things correctly at least one media must be created');

    if(!staff.length)
        throwInternalServerException('In order to display things correctly at least one associate must be added');

    if(!partners.length)
        throwInternalServerException('In order to display things correctly at least one partner must be added');

    await ctx.render('about', {
        meta,
        projects,
        media,
        staff,
        partners
    });
}

router
    .get('home', '/', home)
    .get('about', '/about', about);

module.exports = router;