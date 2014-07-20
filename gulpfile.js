'use strict';

var gulp = require('gulp');
var bower = require('gulp-bower-files');
var less = require('gulp-less');

gulp.task('bower', function moveBowerDeps() {
  return bower().pipe(gulp.dest('public/lib'));
});

gulp.task('bootstrap:prepareLess', ['bower'], function bootstrapPrepareLess() {
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
