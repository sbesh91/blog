var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');

gulp.task('copy', function() {
  return gulp.src([
      'app/index.html',
      'app/bower_components/webcomponentsjs/webcomponents-lite.js',
      'app/bower_components/sw-toolbox/sw-toolbox.js',
      'app/sw.js',
      'app/manifest.json',
      'app/elements/posts/articles.json',
      'app/images/author.jpg',
      'app/images/linkedin.png',
      'app/images/twitter.png'
    ], {
      base: 'app'
    })
    .pipe(gulp.dest('blog'));
});

gulp.task('build', function() {
  return gulp.src('app/elements/elements.html')
    .pipe(vulcanize({
      stripComments: true,
      inlineScripts: true,
      inlineCss: true
    }))
    .pipe(gulp.dest('blog/elements'));
});

gulp.task('default', ['copy', 'build']);
