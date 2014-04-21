var gulp = require('gulp');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');

gulp.task('jsmin', ['browserify'], function () {
    gulp.src('build/js/*.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./build/js'));
});
