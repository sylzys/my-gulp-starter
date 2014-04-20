var sass      	 = require('gulp-sass');
var gulp         = require('gulp');
var livereload   = require('gulp-livereload');
var notify       = require('gulp-notify');
var handleErrors = require('../util/handleErrors');

gulp.task('sass', function() {
	return gulp.src('./src/sass/*.scss')
		.pipe(sass())
		.on('error', handleErrors)
		.pipe(gulp.dest('./build/css'))
		.pipe(livereload());
});
