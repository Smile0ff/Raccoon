const localization = require('@config/middleware/localization');

const getLocales = () => localization.getLocales();
const getCurrentLocale = () => localization.getCurrentLocale();

const getTranslation = (ctx) => {
    return (key) => ctx.req.__(key);
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

module.exports = {
    getLocales,
    getCurrentLocale,
    getTranslation,
    generateUrl,
    getAbsoluteUrl
}