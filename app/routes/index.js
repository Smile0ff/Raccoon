const Router = require('koa-router');
const router = new Router();

const mailer = require('@services/mailer/mailer');
const compileTemplate = require('@services/templating/compileTemplate');

const { throwInternalServerException, throwNotFoundException } = require('./exceptions/http');

const Meta = require('@models/meta');
const Home = require('@models/home');
const About = require('@models/about');
const Project = require('@models/project');
const Media = require('@models/media');
const Staff = require('@models/staff');
const Partner = require('@models/partner');
const Feedback = require('@models/feedback');
const Order = require('@models/order');

const feedbackValidator = require('./validators/feedback');
const orderValidator = require('./validators/order');

const home = async (ctx, next) => {
    let meta = await Meta.findOne({ route: 'home' }),
        home = await Home.findLastUpdated();

    if(!home)
        throwInternalServerException('Intro data must be set to display things correctly');

    await ctx.render('home', {
        meta,
        home
    });
}

const about = async (ctx, next) => {
    let meta = await Meta.findOne({ route: 'about' }),
        about = await About.findLastUpdated(),
        projects = await Project.find({}),
        media = await Media.find({}),
        staff = await Staff.find({}),
        partners = await Partner.find({});

    if(!about)
        throwInternalServerException('Intro data must be set to display things correctly');

    await ctx.render('about', {
        meta,
        about,
        projects,
        media,
        staff,
        partners
    });
}

const showreel = async (ctx, next) => {
    let meta = await Meta.findOne({ route: 'showreel' });

    await ctx.render('showreel', { meta });
}

const contactsGET = async (ctx, next) => {
    let meta = await Meta.findOne({ route: 'contacts' });

    if(ctx.session.flash){
        ctx.state.flash = ctx.session.flash;
        delete ctx.session.flash;
    }

    ctx.state.csrf = ctx.csrf;

    await ctx.render('contacts', { meta });
}

const contactsPOST = async (ctx, next) => {
    let { name, email, message } = ctx.request.body;

    let { hasErrors, errors } = await feedbackValidator.validate(ctx);

    if(hasErrors){
        ctx.session.flash = errors;
        return await ctx.redirect(router.url('contacts'));
    }

    let verifiedConnection = await mailer.verify();

    if(!verifiedConnection)
        throwInternalServerException('SMTP connection not verified, please try again');

    let feedbackHTML = compileTemplate('feedback.pug', { name, email, message }),
        sendError = await mailer.send(feedbackHTML);
    
    if(sendError)
        throwInternalServerException('Error was occured while sending your feedback, please try again later');

    let feedback = new Feedback({ name, email, message }),
        { err, doc } = await feedback.save();

    if(err)
        throwInternalServerException('Error was occured while saving your feedback, please try again later');

    ctx.session.flash = { success: ctx.res.__('success') };
    
    await ctx.redirect(router.url('contacts'));
}

const orderGET = async (ctx, next) => {
    let meta = await Meta.findOne({ route: 'order' });

    if(ctx.session.flash){
        ctx.state.flash = ctx.session.flash;
        delete ctx.session.flash;
    }

    ctx.state.csrf = ctx.csrf;

    await ctx.render('order', {
        meta
    });
}

const orderPOST = async (ctx, next) => {
    let { name, email, amount, message } = ctx.request.body;

    let { hasErrors, errors } = await orderValidator.validate(ctx);

    if(hasErrors){
        ctx.session.flash = errors;
        return await ctx.redirect(router.url('order'));
    }

    let verifiedConnection = await mailer.verify();

    if(!verifiedConnection)
        throwInternalServerException('SMTP connection not verified, please try again');

    let orderHTML = compileTemplate('order.pug', { name, email, amount, message }),
        sendError = await mailer.send(orderHTML);
    
    if(sendError)
        throwInternalServerException('Error was occured while sending your order, please try again later');

    let order = new Order({ name, email, amount, message }),
        { err, doc } = await order.save();

    if(err)
        throwInternalServerException('Error was occured while saving your order, please try again later');

    ctx.session.flash = { success: ctx.res.__('success') };

    await ctx.redirect(router.url('order'));
}

router
    .get('home', '/', home)
    .get('about', '/about', about)
    .get('showreel', '/showreel', showreel)
    .get('contacts', '/contacts', contactsGET)
    .post('contacts-post', '/contacts', contactsPOST)
    .get('order', '/order', orderGET)
    .post('order-post', '/order', orderPOST);

module.exports = router;