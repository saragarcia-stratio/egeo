var gulp = require('gulp');
var replace = require('gulp-replace');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');

gulp.task('copyHtml', () => {
   gulp.src('./src/lib/**/*.html')
      .pipe(gulp.dest('./dist/packages/egeo'));
});

gulp.task('copyTs', () => {
   gulp.src('./src/lib/**/*.ts')
      .pipe(replace(/styleUrls: \[(\'\.\/|\')(.*?)\.scss\'\]/g, 'styleUrls: [\'$2.css\']'))
      .pipe(gulp.dest('./dist/packages/egeo'));
});

gulp.task('copyCss', () => {
   gulp.src('./src/lib/**/*.css')
      .pipe(postcss())
      .pipe(gulp.dest('./dist/packages/egeo'));
});

gulp.task('copyScss', () => {
   gulp.src('./src/lib/**/*.scss')
      .pipe(sass())
      .pipe(postcss())
      .pipe(gulp.dest('./dist/packages/egeo'));
});

var gulp = require('gulp');
var Server = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/config/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('default', ['copyHtml', 'copyTs', 'copyCss', 'copyScss']);
