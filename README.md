![logo](https://github.com/rdnydnns/Beerd/blob/master/assets/images/beerd_logo_256.png)

## Boilerplate for WordPress Themes

This is for custom themes that break the regular WordPress structure; because of this, a "home" template has been created, so read settings must be changed to reflect this. Beerd uses popular tools like Bower, Gulp, Sass, Autoprefixer, and Livereload to speed up your workflow.

## Get started:
Insallation time! Making the most of Beerd requires a little up-front work... we know, we're sorry. Beerd makes use of popular dev tools like Gulp for running tasks, Bower for managing dependencies, Sass for OOCSS, and others to speed up your workflow.

#### [Gulp](http://gulpjs.com/)
```bash
$ npm install
```
Beerd's `gulpfile.js` file is configured to compile Sass into `style.css`, and concatenate scripts&mdash;minus [Modernizr](http://modernizr.com/)&mdash; into `all.js`. Both files are output into the Beerd root directory.

#### [Bower](http://bower.io/)
```bash
$ npm install -g bower
$ bower install
```

#### [Sass](http://sass-lang.com/) ([via Bundler](http://bundler.io/))
```bash
$ gem install bundler
$ bundle install
```
