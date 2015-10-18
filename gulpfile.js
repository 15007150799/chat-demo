var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    webpack = require('gulp-webpack'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    webpackConfig = require('./webpack.config.js');

gulp.task('lint', function  () {
    gulp.src(['./src/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('dist', function () {
    gulp.src('./src/js/chat.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./dist/'))
})

gulp.task('default', ['lint','dist']);