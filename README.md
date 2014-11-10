![logo](https://github.com/rdnydnns/Beerd/blob/master/assets/images/beerd_logo_256.png)

## Boilerplate for WordPress Themes

This is for custom themes that break the regular WordPress structure; because of this, a "home" template has been created, so read settings must be changed to reflect this. Beerd uses popular tools like Bower, Gulp, Sass, Autoprefixer, and Livereload to speed up your workflow.

## Get started
Insallation time! Making the most of Beerd requires a little up-front work... we know, we're sorry.

#### Install [Gulp](http://gulpjs.com/)
```bash
$ npm install
```
Beerd's `gulpfile.js` file is configured to compile Sass into `style.css`, and concatenate scripts&mdash;minus [Modernizr](http://modernizr.com/)&mdash; into `all.js`. Both files are output in the Beerd root directory.

#### Install [Bower](http://bower.io/)
```bash
$ npm install -g bower
$ bower install
```
Bower will install dependencies in `assets/bower_components/` by default. That can be changed by editing the `directory` attribute in the `.bowerrc` file, and reinstalling.

#### Install [Sass](http://sass-lang.com/) ([via Bundler](http://bundler.io/))
```bash
$ gem install bundler
$ bundle install
```
If you don't want to use Bundler simply run `gem install sass` from the command line.
