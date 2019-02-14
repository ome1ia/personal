    'use strict';

// npm i --save-dev gulp gulp-debug gulp-watch gulp-autoprefixer gulp-uglify gulp-sass gulp-cache gulp-clean event-stream gulp-file-include gulp-clean-css gulp-imagemin imagemin-pngquant gulp-concat browser-sync

var gulp = require('gulp'),
    debug = require('gulp-debug'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    cache = require('gulp-cache'),
    clean = require('gulp-clean'),
    estream = require('event-stream'),
    fileinclude = require('gulp-file-include'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    concat = require('gulp-concat'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;


var path = {
    build: { 
        html:   'build/',
        js:     'build/js/',
        css:    'build/css/',
        img:    'build/img/',
        fonts:  'build/fonts/'
    },
    dev: {
        html:   'dev/*.html', 
        js:     'dev/js/template/*.js',
        css:    'dev/scss/main.scss',
        img:    'dev/img/**/*.*', 
        fonts:  'dev/fonts/**/*.*'
    },
    watch: { 
        html:   'dev/**/*.html',
        js:     'dev/js/template/*.js',
        css:    'dev/scss/**/*.scss',
        img:    'dev/img/**/*.*',
        fonts:  'dev/fonts/**/*.*'
    },
    clean: './build'
};

//server
var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "frontend",
    browser: 'google-chrome',
    notify: false
};

//html
gulp.task('html:build', gulp.series(function(cb) {
      gulp.src(path.dev.html)
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
        .pipe(gulp.dest(path.build.html));
        cb();
}));

//js
gulp.task('js:build', gulp.series(function (cb) {
    gulp.src(path.dev.js) 
        .pipe(debug({title: 'debug-js'}))
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js));
        cb();
}));

//css
gulp.task('style:build', gulp.series(function (cb) {
    gulp.src(path.dev.css) 
        .pipe(debug({title: 'debug-css:'}))
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(path.build.css));
        cb();
}));

//img
gulp.task('image:build', gulp.series(function (cb) {
    gulp.src(path.dev.img)
        .pipe(debug({title: 'debug-img:'}))
        .pipe(imagemin({ 
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img));
        cb();
}));

//fonts
gulp.task('fonts:build', gulp.series(function(cb) {
    gulp.src(path.dev.fonts)
        .pipe(gulp.dest(path.build.fonts));
        cb();
}));


//build
gulp.task('build', gulp.parallel(
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build'
));

//watch
gulp.task('watch', gulp.parallel(function(){
    watch([path.watch.html], function(event, cb) {
        gulp.task('html:build')();
    });
    watch([path.watch.css], function(event, cb) {
        gulp.task('style:build')();
    });
    watch([path.watch.js], function(event, cb) {
        gulp.task('js:build')();
    });
    watch([path.watch.img], function(event, cb) {
        gulp.task('image:build')();
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.task('fonts:build')();
    });
}));


//webserver
gulp.task('webserver', function () {
    browserSync(config);
});


//clean
gulp.task('clean', function() {
  return gulp.src(path.clean, {read: false})
    .pipe(clean());
});

//start
//gulp.task('default', gulp.series('build', 'webserver', 'watch'));
gulp.task('default', gulp.series('build', 'watch'));