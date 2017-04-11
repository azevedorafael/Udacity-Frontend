var gulp =require('gulp'),//look for a folder named 'gulp' in the node_modules folder
    imagemin = require('gulp-imagemin'),//gulp-imagemin in the node_modules folder
    clean = require ('gulp-clean'),
    pngquant = require('imagemin-pngquant'),
    imager = require('gulp-image-resize'),
     im = require('imagemagick');


gulp.task('clean', function() {
    // var stream = gulp.src('dist')
    //     .pipe(clean());
    // return stream;//to make clean sincronous   
       return gulp.src('dist')
            .pipe(clean());
          
});    

gulp.task('copy',['clean'], function(){ //['clean'] is the task depedency, wich means this task is executed before 'copy'
    return gulp.src('images_src/**/*')
        .pipe(gulp.dest('dist'));
});

gulp.task('build-img',['copy'], function() {
    gulp.src('images_src/**/*')//1 * for all files and 2* for all folders
        .pipe(imagemin()) // pipe conects source and target
        .pipe(gulp.dest('images_src'));
});

