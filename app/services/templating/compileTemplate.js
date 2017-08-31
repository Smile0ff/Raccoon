const { resolve, join } = require('path');
const pug = require('pug');

const pathToLetters = resolve(
    process.env.BASE,
    process.env.APP,
    'views/letters'
);

module.exports = (tplName, data) => {
    let pathToTpl = join(pathToLetters, tplName),
        compiled = pug.compileFile(pathToTpl);

    return compiled(data)
}