'use strict';

const gulp = require('gulp');
const tsconfig = require('../tsconfig.json');
const opts = tsconfig.compilerOptions;
const $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*'],
});

gulp.task('scripts:cjs', function () {
  return gulp
    .src('src/**/*.ts')
    .pipe($.replace('export default ', 'export = '))
    .pipe($.jswork.pkgHeader())
    .pipe($.typescript({ ...opts, module: 'commonjs' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts:esm', function () {
  return gulp
    .src('src/**/*.ts')
    .pipe($.jswork.pkgHeader())
    .pipe($.typescript({ ...opts, module: 'esnext' }))
    .pipe($.rename({ extname: '.esm.js' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts:typing', function () {
  return gulp
    .src('src/**/*.ts')
    .pipe($.jswork.pkgHeader())
    .pipe($.typescript({ ...opts, declaration: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts', gulp.series(['scripts:cjs', 'scripts:esm', 'scripts:typing']));
