const { join } = require('path');

const gulp = require('gulp');

const config = require('../config');

const watcherTask = () => {

    let cssPath = join(config.css, '/**/*.less'),
        fontsPath = join(config.fonts, '/**/*.*'),
        imagesPath = join(config.images, '/**/**.*');

    gulp.watch(cssPath, ['css']);
    gulp.watch(fontsPath, ['fonts']);
    gulp.watch(imagesPath, ['images']);

}

module.exports = watcherTask;