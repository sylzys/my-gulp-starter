var gulp = require('gulp');
var mocha = require('gulp-mocha');
var handleErrors = require('../util/handleErrors');

gulp.task('mocha', function() {
    return gulp.src(['test/test_*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', handleErrors);
});