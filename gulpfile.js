var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
  browserSync.init({
        server: {
            baseDir: "./"
        }
  });
  gulp.watch("**").on('change', browserSync.reload);
});

// Type 'Gulp' to fire up the site
gulp.task('default', ['serve']);