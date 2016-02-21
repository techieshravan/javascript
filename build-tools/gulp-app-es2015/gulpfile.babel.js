'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';

gulp.task('sass', () => {
  return gulp.src('src/styles/*.scss')
             .pipe(sass().on('error', sass.logError))
             .pipe(gulp.dest('dist/styles/'));
});
