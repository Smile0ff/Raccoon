const { resolve } = require('path');
const Pug = require('koa-pug');

const helpers = require('@services/templating/helpers');

const appPath = process.env.APP;

const viewPath = resolve(
    appPath,
    'views'
);

const environment = process.env.NODE_ENV;

module.exports = (app, router) => {

    app.use(async (ctx, next) => {

        let pug = new Pug({
            viewPath: viewPath,
            helperPath: [
                { getLocales: helpers.getLocales },
                { getCurrentLocale: helpers.getCurrentLocale },
                { translate: helpers.getTranslation(ctx) },
                { url: helpers.generateUrl(router) },
                { absoluteUrl: helpers.getAbsoluteUrl(ctx) },
                { getSocials: helpers.getSocials },
                { getRoutes: helpers.getRoutes },
                { getEmail: helpers.getEmail },
                { getVideo: helpers.getVideo },
                { isCurrentRoute: helpers.isCurrentRoute(ctx, router) }
            ],
            noCache: environment === 'production',
            app: app
        });

        await next();
    });

};