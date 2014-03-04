![logo](http://mtthwbsh.com/assets/beerd.png)

Boilerplate for WordPress Themes

SCSS dependencies included in CodeKit config file. Optionally compile assets in command line if no access to CodeKit.

This is for custom themes that break the regular WordPress structure; because of this, a "home" template has been created. The read settings must be changed to reflect this.

## Using Gulp:

Gulp uses node.js streams to complete tasks for you, fast. Using gulp is **not required** to use Beerd. If you would like to make use of gulp, the `gulpfile.js` has already been created for you so just follow the installation instructions below.

Install gulp globally

```bash
$ npm install -g gulp
```

`cd` to the project directory and install gulp locally

```bash
$ npm install gulp --save-dev
```

Beerd makes use of the following gulp plugins:

- Sass compile (gulp-ruby-sass)
- Autoprefixer (gulp-autoprefixer)
- Minify CSS (gulp-minify-css)
- JSHint (gulp-jshint)
- Uglify (gulp-uglify)
- Compress images (gulp-imagemin)
- LiveReload (gulp-livereload, requires tiny-lr)
- Caching of images so only changed images are compressed (gulp-cache)
- Notify of changes (gulp-notify)

Install these plugins

```bash
$ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-uglify gulp-imagemin gulp-clean gulp-notify gulp-rename gulp-livereload tiny-lr gulp-cache --save-dev
```

That's it! To run the default gulp task use

```bash
$ gulp
```

To have gulp watch for file changes and livereload the browser use

```bash
$ gulp watch
```
