var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
  browserSync.init({
        server: {
            baseDir: "./"
        }
  });
  //gulp.watch("sass/*.scss", ['sass']); Not using SASS for this project right now
  gulp.watch("*.html").on('change', browserSync.reload);
  gulp.watch("*.css").on('change', browserSync.reload);
  gulp.watch("*.js").on('change', browserSync.reload);
});

// Type 'Gulp' to fire up the site
gulp.task('default', ['serve']);