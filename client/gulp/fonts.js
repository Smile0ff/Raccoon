const { join } = require('path');

const gulp = require('gulp');

const config = require('../config');

const fontsTask = () => {

    let fontsInPath = join(config.fonts, '/**/*.*'),
        fontsOutPath = join(config.build, 'fonts');

    gulp.src(fontsInPath).pipe(gulp.dest(fontsOutPath));

}

module.exports = fontsTask;