var gulp       = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', function(){
	//gulp.watch('src/js/**', ['browserify']);
	gulp.watch('src/sass/**', ['sass']);
	gulp.watch('src/img/**', ['imagemin']);
	livereload();
});