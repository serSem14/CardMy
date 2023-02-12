const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('style', function() {
    return gulp.src("src/sass/*.+(scss|sass)")
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError));
            .pipe(gulp.dest('src/css'));
            .pipe(browserSync.stream());
})

gulp.task('watch', function() {
    gulp.watch('src/sass/*.+(scss|sass)', gulp.parallel('style'));
    gulp.watch('crs/*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', 'server', 'style'));

