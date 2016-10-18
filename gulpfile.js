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

/* build pages */

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

/* build pages for javascript tips */

gulp.task('jspages-build', function () {
  return gulp.src('./dist/javascript/*.html')
    .pipe(foreach(function (stream, file) {
      dirName = returnName(file);
      console.log('build javascript/' + dirName + '/index.html');
      return gulp.src('template-tips-pages.html')
        .pipe(gfi({
          '<!-- INSERT TITLE -->': './dist/javascript/header/' + dirName + '.html',
          '<!-- INSERT CONTENTS -->': './dist/javascript/' + dirName + '.html'
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./javascript/' + dirName + '/'));
    }));
});

gulp.task('jspages-prebuild:header', function () {
  mkdirp('./dist/javascript/header/');
  return gulp.src('./pages/javascript/header/*.md')
    .pipe(foreach(function (stream, file) {
      return stream
        .pipe(markdown());
    }))
    .pipe(gulp.dest('./dist/javascript/header/'));
});

gulp.task('jspages-prebuild:content', function () {
  var dirName;
  mkdirp('./dist/javascript/');
  return gulp.src('./pages/javascript/*.md')
    .pipe(foreach(function (stream, file) {
      dirName = returnName(file);
      mkdirp(dirName, function (err) {
        if (err) console.error(err)
        else console.log('mkdir ', dirName);
      });
      return stream
        .pipe(markdown());
    }))
    .pipe(gulp.dest('./dist/javascript/'));
});

/* build pages for android tips */

gulp.task('androidpages-build', function () {
  return gulp.src('./dist/android/*.html')
    .pipe(foreach(function (stream, file) {
      dirName = returnName(file);
      console.log('build android/' + dirName + '/index.html');
      return gulp.src('template-tips-pages.html')
        .pipe(gfi({
          '<!-- INSERT TITLE -->': './dist/android/header/' + dirName + '.html',
          '<!-- INSERT CONTENTS -->': './dist/android/' + dirName + '.html'
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./android/' + dirName + '/'));
    }));
});

gulp.task('androidpages-prebuild:header', function () {
  mkdirp('./dist/android/header/');
  return gulp.src('./pages/android/header/*.md')
    .pipe(foreach(function (stream, file) {
      return stream
        .pipe(markdown());
    }))
    .pipe(gulp.dest('./dist/android/header/'));
});

gulp.task('androidpages-prebuild:content', function () {
  var dirName;
  mkdirp('./dist/android/');
  return gulp.src('./pages/android/*.md')
    .pipe(foreach(function (stream, file) {
      dirName = returnName(file);
      mkdirp(dirName, function (err) {
        if (err) console.error(err)
        else console.log('mkdir ', dirName);
      });
      return stream
        .pipe(markdown());
    }))
    .pipe(gulp.dest('./dist/android/'));
});

/* build pages for ios tips */

gulp.task('iospages-build', function () {
  return gulp.src('./dist/ios/*.html')
    .pipe(foreach(function (stream, file) {
      dirName = returnName(file);
      console.log('build ios/' + dirName + '/index.html');
      return gulp.src('template-tips-pages.html')
        .pipe(gfi({
          '<!-- INSERT TITLE -->': './dist/ios/header/' + dirName + '.html',
          '<!-- INSERT CONTENTS -->': './dist/ios/' + dirName + '.html'
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./ios/' + dirName + '/'));
    }));
});

gulp.task('iospages-prebuild:header', function () {
  mkdirp('./dist/ios/header/');
  return gulp.src('./pages/ios/header/*.md')
    .pipe(foreach(function (stream, file) {
      return stream
        .pipe(markdown());
    }))
    .pipe(gulp.dest('./dist/ios/header/'));
});

gulp.task('iospages-prebuild:content', function () {
  var dirName;
  mkdirp('./dist/ios/');
  return gulp.src('./pages/ios/*.md')
    .pipe(foreach(function (stream, file) {
      dirName = returnName(file);
      mkdirp(dirName, function (err) {
        if (err) console.error(err)
        else console.log('mkdir ', dirName);
      });
      return stream
        .pipe(markdown());
    }))
    .pipe(gulp.dest('./dist/ios/'));
});

/* build pages for dotnet tips */

gulp.task('dotnetpages-build', function () {
  return gulp.src('./dist/dotnet/*.html')
    .pipe(foreach(function (stream, file) {
      dirName = returnName(file);
      console.log('build dotnet/' + dirName + '/index.html');
      return gulp.src('template-tips-pages.html')
        .pipe(gfi({
          '<!-- INSERT TITLE -->': './dist/dotnet/header/' + dirName + '.html',
          '<!-- INSERT CONTENTS -->': './dist/dotnet/' + dirName + '.html'
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./dotnet/' + dirName + '/'));
    }));
});

gulp.task('dotnetpages-prebuild:header', function () {
  mkdirp('./dist/dotnet/header/');
  return gulp.src('./pages/dotnet/header/*.md')
    .pipe(foreach(function (stream, file) {
      return stream
        .pipe(markdown());
    }))
    .pipe(gulp.dest('./dist/dotnet/header/'));
});

gulp.task('dotnetpages-prebuild:content', function () {
  var dirName;
  mkdirp('./dist/dotnet/');
  return gulp.src('./pages/dotnet/*.md')
    .pipe(foreach(function (stream, file) {
      dirName = returnName(file);
      mkdirp(dirName, function (err) {
        if (err) console.error(err)
        else console.log('mkdir ', dirName);
      });
      return stream
        .pipe(markdown());
    }))
    .pipe(gulp.dest('./dist/dotnet/'));
});