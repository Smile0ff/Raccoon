const { resolve, join } = require('path');
const moduleAlias = require('module-alias');

const appPath = resolve(
    process.env.BASE,
    process.env.APP
);

const aliases = {
    '@root': '',
    '@config': 'config',
    '@middleware': 'middleware',
    '@models': 'models',
    '@routes': 'routes',
    '@services': 'services',
    '@views': 'views'
}

Object.keys(aliases).map((alias) => {

    moduleAlias.addAlias(alias, join(appPath, aliases[alias]));
});

module.exports = moduleAlias;