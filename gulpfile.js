'use strict';

var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var less = require('gulp-less');

gulp.task('mainBowerFiles', function moveBowerDeps() {
  return gulp.src(mainBowerFiles(), { base: 'bower_components' })
      .pipe(gulp.dest('public/lib'));
});

gulp.task('bootstrap:prepareLess', ['mainBowerFiles'], function bootstrapPrepareLess() {
  return gulp.src('less/bootstrap/variables.less')
      .pipe(gulp.dest('public/lib/bootstrap/less'));
});

gulp.task('bootstrap:compileLess', ['bootstrap:prepareLess'], function bootstrapCompileLess() {
  return gulp.src('public/lib/bootstrap/less/bootstrap.less')
      .pipe(less())
      .pipe(gulp.dest('public/lib/bootstrap/dist/css'));
});

gulp.task('watch', ['bootstrap:compileLess'], function watch() {
  gulp.watch(['less/bootstrap/variables.less'], ['bootstrap:compileLess']);
});
