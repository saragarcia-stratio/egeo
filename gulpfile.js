var gulp = require('gulp');
var replace = require('gulp-replace');
var sass = require('gulp-sass');
var exec = require('child_process').exec;
var rimraf = require('rimraf'); // rimraf directly

gulp.task('clean:dist', function (cb) {
   rimraf('./dist', cb);
});

gulp.task('clean:lib', function (cb) {
   rimraf('./lib', cb);
});

gulp.task('clean', ['clean:lib', 'clean:dist']);

gulp.task('compile', ['copyHtml', 'copyTs', 'copyScss'], (cb) => {
   console.log('Compiling.... wait please');
   exec('npm run ngc && npm run build:lib', (err, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      cb(err);
   });
})

gulp.task('copyHtml', ['clean'], () => {
   gulp.src('./components/**/*.html')
      .pipe(gulp.dest('./dist/components'));
});

gulp.task('copyTs', ['clean'], () => {
   gulp.src('./components/**/*.ts')
      .pipe(replace(/styleUrls: \[(\'\.\/|\')(.*?)\.scss\'\]/g, 'styleUrls: [\'$2.css\']'))
      .pipe(gulp.dest('./dist/components'));
});

gulp.task('copyScss', ['clean'], () => {
   gulp.src('./components/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./dist/components'));
});

gulp.task('default', ['compile']);
