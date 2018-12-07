var gulp = require('gulp');

gulp.task('default', function () {
    var postcss = require('gulp-postcss');
    var tailwindcss = require('tailwindcss');

    return gulp.src('resources/styles.css')
        .pipe(postcss([
            tailwindcss('resources/tailwind.js'),
            require('autoprefixer'),
        ]))
        .pipe(gulp.dest('src/'));
});