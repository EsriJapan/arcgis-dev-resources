var gulp = require('gulp');
var gfi = require('gulp-file-insert');
var foreach = require('gulp-foreach');
var markdown = require('gulp-markdown');
var rename = require('gulp-rename');
var File = require('vinyl');
var mkdirp = require('mkdirp');

function returnName(fileData) {
  var file = new File(fileData);
  return file.stem;
}

gulp.task('build', function () {
  return gulp.src('./dist/*.html')
    .pipe(foreach(function (stream, file) {
      dirName = returnName(file);
      console.log('build ' + dirName + '/index.html');
      return gulp.src('template.html')
        .pipe(gfi({
          '<!-- INSERT TITLE -->': './dist/header/' + dirName + '.html',
          '<!-- INSERT CONTENTS -->': './dist/' + dirName + '.html'
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./' + dirName + '/'));
    }));
});

gulp.task('prebuild:header', function () {
  mkdirp('./dist/header/');
  return gulp.src('./pages/header/*.md')
    .pipe(foreach(function (stream, file) {
      return stream
        .pipe(markdown());
    }))
    .pipe(gulp.dest('./dist/header/'));
});

gulp.task('prebuild:content', function () {
  var dirName;
  mkdirp('./dist/');
  return gulp.src('./pages/*.md')
    .pipe(foreach(function (stream, file) {
      dirName = returnName(file);
      mkdirp(dirName, function (err) {
        if (err) console.error(err)
        else console.log('mkdir ', dirName);
      });
      return stream
        .pipe(markdown());
    }))
    .pipe(gulp.dest('./dist/'));
});
