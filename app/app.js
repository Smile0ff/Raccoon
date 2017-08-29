const Koa = require('koa');

const configureDatabase = require('@config/database/mongoose');

const helmet = require('@config/middleware/helmet');
const cors = require('@config/middleware/cors');
const logger = require('@config/middleware/logger');
const body = require('@config/middleware/body');
const session = require('@config/middleware/session');
const static = require('@config/middleware/static');

const configureViews = require('@config/templating/views');

const subdomain = require('@middleware/subdomain');
const localization = require('@middleware/localization');

const app = new Koa();

const router = require('@routes/');
const processError = require('@routes/error');

configureDatabase(app);

app.use(processError);

app.use(helmet());
app.use(cors());
app.use(logger());
app.use(body());
app.use(session(app));
app.use(static());

configureViews(app, router);

app.use(subdomain);
app.use(localization);

app.use(router.routes());
app.use(router.allowedMethods());

app.on('error', (err, ctx) => console.error(err));
process.on('uncaughtException', (err) => console.error(err));
process.on('unhandledRejection', (reason, p) => console.error(reason, p));

module.exports = app;