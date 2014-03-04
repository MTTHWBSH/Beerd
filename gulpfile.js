// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    // LiveReload requires browser extensions found here: http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();

// Styles
gulp.task('styles', function() {
  return gulp.src('./styles/style.scss')
    .pipe(sass({ style: 'expanded', }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(minifycss())
    .pipe(livereload(server))
    .pipe(gulp.dest('./'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src('./scripts/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    // Concatenate and minify scripts to main.min.js
    .pipe(concat('main.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(livereload(server))
    .pipe(gulp.dest('./scripts/'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Images
gulp.task('images', function() {
  return gulp.src('images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(livereload(server))
    .pipe(gulp.dest('./images/'))
    .pipe(notify({ message: 'Images task complete' }));
});

// Templates
gulp.task('templates', function(){
  return gulp.src('./*.php')
    .pipe(livereload(server))
});

// Default task
gulp.task('default', function() {
    gulp.start('styles', 'scripts', 'images', 'templates');
});

// Watch
gulp.task('watch', function() {
  // Listen on port 35729
  server.listen(35729, function (err) {
    if (err) {
      return console.log(err)
    };
    // Watch .scss files
    gulp.watch('./styles/**/*.scss', ['styles']);
    // Watch .js files
    gulp.watch('./scripts/**/*.js', ['scripts']);
    // Watch image files
    gulp.watch('./images/**/*', ['images']);
    // Watch templates
    gulp.watch('./*.php', ['templates']);
  });
});
