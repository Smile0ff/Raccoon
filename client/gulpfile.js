const gulp = require('gulp');

const config = require('./config');

const css = require('./gulp/css');
const fonts = require('./gulp/fonts');
const images = require('./gulp/images');
const watcher = require('./gulp/watcher');

gulp.task('css', css);
gulp.task('fonts', fonts);
gulp.task('images', images);
gulp.task('watcher', watcher);

gulp.task('default', ['css', 'fonts', 'images']);