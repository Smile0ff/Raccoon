const localization = require('@config/middleware/localization');

const socials = require('@config/website/socials');
const routes = require('@config/website/routes');

const getLocales = () => localization.getLocales();
const getCurrentLocale = () => localization.getCurrentLocale();

const getTranslation = (ctx) => {
    return (key) => ctx.res.__(key);
}

const generateUrl = (router) => {
    return (name, params) => router.url(name, params);
}

const getAbsoluteUrl = (ctx) => {

    return (subdomain) => {
        let protocol = ctx.protocol + '://',
            origin = process.env.ORIGIN,
            queryPath = ctx.path;

        subdomain = subdomain ? subdomain + '.' : '';

        return `${protocol}${subdomain}${origin}${queryPath}`;
    }

}

const getSocials = () => socials;

const getRoutes = () => routes;

const isCurrentRoute = (ctx, router) => {
    return (route) => ctx.router.route(route).path === ctx.path;
}

module.exports = {
    getLocales,
    getCurrentLocale,
    getTranslation,
    generateUrl,
    getAbsoluteUrl,
    getSocials,
    getRoutes,
    isCurrentRoute
}