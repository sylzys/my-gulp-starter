var gulp = require('gulp');

gulp.task('build', ['sass', 'imagemin', 'jshint', 'browserify', 'jsmin']);
