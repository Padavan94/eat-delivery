var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var rimraf = require('rimraf');
var plumber = require('gulp-plumber');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./",
    });
    gulp.watch("css/sass/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("css/sass/*.scss")
        .pipe(plumber())
        .pipe(sass({
            includePaths: ['src/style/'],
            outputStyle: 'compressed',
            sourceMap: false,
            errLogToConsole: true
        }))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});


/*gulp.task('html:build', function () {
    gulp.src('./*.html') //Выберем файлы по нужному пути
        .pipe(gulp.dest('dist')) //Выплюнем их в папку build
});

gulp.task('styles:build', function() {
    return gulp.src("css/*.css")
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(concat('all.css'))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});*/

gulp.task('clean', function (cb) {
    rimraf('./dist', cb);
});


gulp.task('default', ['serve']);