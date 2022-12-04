(function () {
  'use strict';
  const gulp = require('gulp');
  const tsconfig = require('../tsconfig.json');
  const { execSync } = require('child_process');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*'],
  });

  gulp.task('scripts:cjs', async function () {
    execSync('tsc', { stdio: 'inherit' });
  });

  gulp.task('scripts:tpls', function () {
    return gulp.src('src/tpls/*').pipe(gulp.dest('dist/tpls'));
  });
})();
