const { resolve } = require('path');
const Localization = require('@services/localization/localization');

const locales = [
    process.env.LOCALE_EN,
    process.env.LOCALE_RU
];

const defaultLocale = process.env.DEFAULT_LOCALE;

const cookie = process.env.COOKIE_LOCALE;

const directory = resolve(
    process.env.BASE,
    process.env.APP,
    'locales'
);

const localization = new Localization(locales, defaultLocale, cookie, directory);

module.exports = localization;