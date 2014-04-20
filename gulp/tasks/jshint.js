var gulp       	 = require('gulp');
var jshint     	 = require('gulp-jshint');
var notify       = require('gulp-notify');
var handleErrors = require('../util/handleErrors');

gulp.task('jshint', function() {

	return gulp.src('./src/js/*.js')
	.pipe(jshint())
	.on('error', handleErrors)
	.pipe(jshint.reporter('default'));
	/* @TODO: make error being notified */
});