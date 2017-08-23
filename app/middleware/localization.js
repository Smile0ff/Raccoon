const localization = require('@config/middleware/localization');

const defaultLocale = process.env.DEFAULT_LOCALE

module.exports = async (ctx, next) => {
    localization.initialize(ctx);

    let locale = ctx.userSubdomain || defaultLocale;

    localization.setLocaleWithCookie(ctx, locale);
    localization.setLocale(ctx.req, locale);
    localization.setCurrentLocale(locale);
    
    await next();
};