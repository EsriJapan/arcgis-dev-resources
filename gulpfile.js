var gulp = require('gulp');
var gfi = require('gulp-file-insert');
var processhtml = require('gulp-processhtml');
var foreach = require('gulp-foreach');
var markdown = require('gulp-markdown');
var rename = require('gulp-rename');
var File = require('vinyl');
var mkdirp = require('mkdirp');

function returnGFI(filedata) {
  var file = new File(filedata);
  var tag = '/* jsFile ' + file.stem.substr(0, 2) + ' */';
  var mdFile = 'pages/' + file.stem + '.md';
  var obj = {};
  Object.defineProperty(obj, tag, {
    value: mdFile,
    writable: true,
    enumerable: true,
    configurable: true
  });
  console.log('Processing ' + tag + ' : ' + jsFile);
  return obj;
}

function returnName(fileData) {
  var file = new File(fileData);
  return file.stem;
}

gulp.task('build', function () {
  return gulp.src('./dist/*.html')
    .pipe(foreach(function (stream, file) {
      dirName = returnName(file);
      if(dirName !== 'index') {
        return gulp.src('template.html')
          .pipe(gfi({
            '<!-- INSERT TITLE -->': './dist/header/' + dirName + '.html',
            '<!-- INSERT CONTENTS -->': './dist/' + dirName + '.html'
          }))
          .pipe(rename('index.html'))
          .pipe(gulp.dest('./' + dirName + '/'));
      }
    }));
});

gulp.task('pre-build-header', function () {
  var dirName;
  mkdirp('./dist/header/');
  return gulp.src('./pages/header/*.md')
    .pipe(foreach(function (stream, file) {
      dirName = returnName(file);
      if(dirName !== 'index') {
        mkdirp(dirName, function (err) {
          if (err) console.error(err)
          else console.log('mkdir ', dirName);
        });
      }
      return stream
        .pipe(markdown());
    }))
    .pipe(gulp.dest('./dist/header/'));
});

gulp.task('pre-build', function () {
  var dirName;
  mkdirp('./dist/');
  return gulp.src('./pages/*.md')
    .pipe(foreach(function (stream, file) {
      dirName = returnName(file);
      if(dirName !== 'index') {
        mkdirp(dirName, function (err) {
          if (err) console.error(err)
          else console.log('mkdir ', dirName);
        });
      }
      return stream
        .pipe(markdown());
    }))
    .pipe(gulp.dest('./dist/'));
});
