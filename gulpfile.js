// load gulp plugins
var gulp     = require('gulp'),
sass         = require('gulp-ruby-sass'),
autoprefixer = require('gulp-autoprefixer'),
jshint       = require('gulp-jshint'),
uglify       = require('gulp-uglify'),
rename       = require('gulp-rename'),
concat       = require('gulp-concat'),
notify       = require('gulp-notify'),
imagemin     = require('gulp-imagemin'),
cache        = require('gulp-cache'),
livereload   = require('gulp-livereload'),
plumber      = require('gulp-plumber'),
del          = require('del');

// styles
gulp.task('styles', function() {
  return gulp.src('assets/styles/style.scss')
    .pipe(plumber())
    .pipe(sass({
      style: 'compressed'
    }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('.'))
    .pipe(notify({message: 'Completed Styles'}));
});

// scripts
gulp.task('scripts', ['modernizr'], function() {
  return gulp.src('assets/scripts/*.js')
    .pipe(plumber())
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('.'))
    .pipe(notify({message: 'Completed Scripts'}));
});

// modernizr
gulp.task('modernizr', function() {
  gulp.src('assets/bower_components/modernizr/modernizr.js')
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('assets/scripts/vendor/'))
});

// images
gulp.task('images', function() {
  return gulp.src('assets/images/**/*')
    .pipe(plumber())
    .pipe(cache(imagemin({
      optimizationLevel:5,
      progressive: true,
      interlaced: true
    })))
    .pipe(notify({message: 'Completed Images'}))
    .pipe(gulp.dest('assets/images/'))
});

// clean
gulp.task('clean', function(cb) {
  del(['style.css', 'all.js'], cb)
});

// watch
gulp.task('watch', function() {
  gulp.watch('assets/styles/**/*.scss', ['styles']);
  gulp.watch('assets/scripts/**/*.js', ['scripts']);
  gulp.watch('assets/images/**', ['images']);
  // Create LiveReload server
  livereload.listen();
  // Watch for assets and templates, reload on change
  gulp.watch(['**/*.php', 'assets/**']).on('change', livereload.changed);
});

// default
gulp.task('default', ['clean', 'styles', 'scripts', 'images'], function() {
  gulp.start('watch');
});
