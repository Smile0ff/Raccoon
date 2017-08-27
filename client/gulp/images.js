const { join } = require('path');

const gulp = require('gulp');

const config = require('../config');

const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

const imagesTask = () => {

    let imagesInPath = join(config.images, '/**/*.*'),
        imagesOutPath = join(config.build, 'images');

    gulp.src(imagesInPath)
        .pipe(imagemin({
            optimizationLevel: 4,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(imagesOutPath));

}

module.exports = imagesTask;