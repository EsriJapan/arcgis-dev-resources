var gulp = require('gulp');
var gfi = require('gulp-file-insert');
var foreach = require('gulp-foreach');
var markdown = require('gulp-markdown');
var rename = require('gulp-rename');
var File = require('vinyl');
var mkdirp = require('mkdirp');
var minimist = require("minimist");
var argv = minimist(process.argv.slice(2));

// gulp task -f filename
// npm run build -- --f="filename"
function checkFileName(){
  var f = argv['f'];
  if(f) {
    if (f.length > 0) {
      var ext = f.lastIndexOf('.md');
      if (f.length-3 === ext) {
        return f.substr(0, f.length-3);
      } else {
        return f;
      }
    }
  }
  return '*';
}

function returnName(fileData) {
  var file = new File(fileData);
  return file.stem;
}

/* build pages */

gulp.task('build', ['prebuild:header', 'prebuild:content'], function () {
  var fileName = checkFileName();
  var src = './dist/' + fileName + '.html';
  return gulp.src(src)
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
  var fileName = checkFileName();
  var src = './pages/header/' + fileName + '.md';
  return gulp.src(src)
    .pipe(foreach(function (stream, file) {
      return stream
        .pipe(markdown());
    }))
    .pipe(gulp.dest('./dist/header/'));
});

gulp.task('prebuild:content', function () {
  var dirName;
  mkdirp('./dist/');
  var fileName = checkFileName();
  var src = './pages/' + fileName + '.md';
  return gulp.src(src)
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

gulp.task('jspages-build', ['jspages-prebuild:header', 'jspages-prebuild:content'], function () {
  var fileName = checkFileName();
  var src = './dist/javascript/' + fileName + '.html';
  return gulp.src(src)
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
  var fileName = checkFileName();
  var src = './pages/javascript/header/' + fileName + '.md';
  return gulp.src(src)
    .pipe(foreach(function (stream, file) {
      return stream
        .pipe(markdown());
    }))
    .pipe(gulp.dest('./dist/javascript/header/'));
});

gulp.task('jspages-prebuild:content', function () {
  mkdirp('./dist/javascript/');
  var fileName = checkFileName();
  var src = './pages/javascript/' + fileName + '.md';
  return gulp.src(src)
    .pipe(foreach(function (stream, file) {
      return stream
        .pipe(markdown());
    }))
    .pipe(gulp.dest('./dist/javascript/'));
});

/* build pages for web appbuilder tips */

gulp.task('wabpages-build', ['wabpages-prebuild:header', 'wabpages-prebuild:content'], function () {
  var fileName = checkFileName();
  var src = './dist/webappbuilder/' + fileName + '.html';
  return gulp.src(src)
    .pipe(foreach(function (stream, file) {
      dirName = returnName(file);
      console.log('build webappbuilder/' + dirName + '/index.html');
      return gulp.src('template-tips-pages.html')
        .pipe(gfi({
          '<!-- INSERT TITLE -->': './dist/webappbuilder/header/' + dirName + '.html',
          '<!-- INSERT CONTENTS -->': './dist/webappbuilder/' + dirName + '.html'
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./webappbuilder/' + dirName + '/'));
    }));
});

gulp.task('wabpages-prebuild:header', function () {
  mkdirp('./dist/webappbuilder/header/');
  var fileName = checkFileName();
  var src = './pages/webappbuilder/header/' + fileName + '.md';
  return gulp.src(src)
    .pipe(foreach(function (stream, file) {
      return stream
        .pipe(markdown());
    }))
    .pipe(gulp.dest('./dist/webappbuilder/header/'));
});

gulp.task('wabpages-prebuild:content', function () {
  mkdirp('./dist/webappbuilder/');
  var fileName = checkFileName();
  var src = './pages/webappbuilder/' + fileName + '.md';
  return gulp.src(src)
    .pipe(foreach(function (stream, file) {
      return stream
        .pipe(markdown());
    }))
    .pipe(gulp.dest('./dist/webappbuilder/'));
});

/* build pages for android tips */

gulp.task('androidpages-build', ['androidpages-prebuild:header', 'androidpages-prebuild:content'], function () {
  var fileName = checkFileName();
  var src = './dist/android/' + fileName + '.html';
  return gulp.src(src)
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
  var fileName = checkFileName();
  var src = './pages/android/header/' + fileName + '.md';
  return gulp.src(src)
    .pipe(foreach(function (stream, file) {
      return stream
        .pipe(markdown());
    }))
    .pipe(gulp.dest('./dist/android/header/'));
});

gulp.task('androidpages-prebuild:content', function () {
  mkdirp('./dist/android/');
  var fileName = checkFileName();
  var src = './pages/android/' + fileName + '.md';
  return gulp.src(src)
    .pipe(foreach(function (stream, file) {
      return stream
        .pipe(markdown());
    }))
    .pipe(gulp.dest('./dist/android/'));
});

/* build pages for ios tips */

gulp.task('iospages-build', ['iospages-prebuild:header', 'iospages-prebuild:content'], function () {
  var fileName = checkFileName();
  var src = './dist/ios/' + fileName + '.html';
  return gulp.src(src)
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
  var fileName = checkFileName();
  var src = './pages/ios/header/' + fileName + '.md';
  return gulp.src(src)
    .pipe(foreach(function (stream, file) {
      return stream
        .pipe(markdown());
    }))
    .pipe(gulp.dest('./dist/ios/header/'));
});

gulp.task('iospages-prebuild:content', function () {
  mkdirp('./dist/ios/');
  var fileName = checkFileName();
  var src = './pages/ios/' + fileName + '.md';
  return gulp.src(src)
    .pipe(foreach(function (stream, file) {
      return stream
        .pipe(markdown());
    }))
    .pipe(gulp.dest('./dist/ios/'));
});

/* build pages for dotnet tips */

gulp.task('dotnetpages-build', ['dotnetpages-prebuild:header', 'dotnetpages-prebuild:content'], function () {
  var fileName = checkFileName();
  var src = './dist/dotnet/' + fileName + '.html';
  return gulp.src(src)
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
  var fileName = checkFileName();
  var src = './pages/dotnet/header/' + fileName + '.md';
  return gulp.src(src)
    .pipe(foreach(function (stream, file) {
      return stream
        .pipe(markdown());
    }))
    .pipe(gulp.dest('./dist/dotnet/header/'));
});

gulp.task('dotnetpages-prebuild:content', function () {
  mkdirp('./dist/dotnet/');
  var fileName = checkFileName();
  var src = './pages/dotnet/' + fileName + '.md';
  return gulp.src(src)
    .pipe(foreach(function (stream, file) {
      return stream
        .pipe(markdown());
    }))
    .pipe(gulp.dest('./dist/dotnet/'));
});

/* build pages for tips */

gulp.task('tips-build', ['tips-prebuild:header', 'tips-prebuild:content'], function () {
  var fileName = checkFileName();
  var src = './dist/tips/' + fileName + '.html';
  return gulp.src(src)
    .pipe(foreach(function (stream, file) {
      dirName = returnName(file);
      console.log('build tips/' + dirName + '/index.html');
      return gulp.src('template-tips-pages.html')
        .pipe(gfi({
          '<!-- INSERT TITLE -->': './dist/tips/header/' + dirName + '.html',
          '<!-- INSERT CONTENTS -->': './dist/tips/' + dirName + '.html'
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./tips/' + dirName + '/'));
    }));
});

gulp.task('tips-prebuild:header', function () {
  mkdirp('./dist/tips/header/');
  var fileName = checkFileName();
  var src = './pages/tips/header/' + fileName + '.md';
  return gulp.src(src)
    .pipe(foreach(function (stream, file) {
      return stream
        .pipe(markdown());
    }))
    .pipe(gulp.dest('./dist/tips/header/'));
});

gulp.task('tips-prebuild:content', function () {
  mkdirp('./dist/tips/');
  var fileName = checkFileName();
  var src = './pages/tips/' + fileName + '.md';
  return gulp.src(src)
    .pipe(foreach(function (stream, file) {
      return stream
        .pipe(markdown());
    }))
    .pipe(gulp.dest('./dist/tips/'));
});