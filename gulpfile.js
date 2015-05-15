var gulp = require('gulp');
var sass = require('gulp-sass');
var path = 'scss/**/*.scss';
gulp.task('sass', function () {
  gulp.src(path)
    .pipe(sass({errLogToConsole: true}))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  gulp.watch(path, ['sass']);
});

gulp.task('default', ['sass', 'watch']);
