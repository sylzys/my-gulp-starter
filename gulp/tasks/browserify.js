var browserify   = require('browserify');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var livereload   = require('gulp-livereload');
var source       = require('vinyl-source-stream');

gulp.task('browserify', function(){
	return browserify({
			entries: ['./src/js/main.js']
			//extensions: ['.coffee', '.hbs']
		})
		.bundle({debug: true})
		.on('error', handleErrors)
		.pipe(source('main.js'))
		.pipe(gulp.dest('./build/js/'))
		.pipe(livereload());
});
