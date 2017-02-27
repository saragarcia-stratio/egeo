var gulp = require('gulp');
var replace = require('gulp-replace');
var sass = require('gulp-sass');


gulp.task('copyHtml', () => {
   gulp.src('./components/**/*.html')
      .pipe(gulp.dest('./dist/components'));
});

gulp.task('copyTs', () => {
   gulp.src('./components/**/*.ts')
      .pipe(replace(/styleUrls: \[(\'\.\/|\')(.*?)\.scss\'\]/g, 'styleUrls: [\'$2.css\']'))
      .pipe(gulp.dest('./dist/components'));
});

gulp.task('copyScss', () => {
   gulp.src('./components/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./dist/components'));
});

gulp.task('default', ['copyHtml', 'copyTs', 'copyScss']);
