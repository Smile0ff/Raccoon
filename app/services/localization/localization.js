const i18n = require('i18n');

class Localization{

    constructor(locales, defaultLocale, cookie, directory){
        Object.assign(this, i18n);

        this.locales = locales;
        this.defaultLocale = defaultLocale;
        this.cookie = cookie;
        this.directory = directory;

        this.currentLocale = defaultLocale;

        this.configure({
            locales: locales,
            defaultLocale: defaultLocale,
            cookie: cookie,
            directory: directory,
            updateFiles: true
        });
    }

    initialize(ctx){
        this.init(ctx.req, ctx.res);
    }

    setCurrentLocale(locale){
        this.currentLocale = locale;
    }

    getCurrentLocale(){
        return this.currentLocale;
    }

    setLocaleWithCookie(ctx, locale){
        ctx.cookies.set(this.cookie, locale);
    }

    getLocaleWithCookie(ctx){
        ctx.cookies.get(this.cookie);
    }

}

module.exports = Localization;