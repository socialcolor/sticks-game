const {
  src,
  dest,
  parallel,
  series,
  watch
} = require('gulp'); // Галп и его плагины
const browserSync = require('browser-sync').create(); // Автообновления страницы
const plumber = require('gulp-plumber'); // Вывод ошибок в консоль
const sourcemap = require('gulp-sourcemaps'); // Карта кода в браузере
const sass = require('gulp-sass'); // Sass
const del = require('del');
sass.compiler = require('node-sass');

const browsersync = () => {
  browserSync.init({
    server: {
      baseDir: 'source'
    }
  })
};

const styles = () => {
  return src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(sourcemap.write('.'))
    .pipe(dest('source/css'))
    .pipe(browserSync.stream())
};


const clean = () => del('build');

const copy = () => {
  return src([
    'source/fonts/*',
    'source/img/*',
    'source/js/*.js',
    'source/*.html'
  ], {
      base: 'source'
    })
    .pipe(dest('build'))
}

const watcher = () => {
  watch('source/sass/**/*.scss', styles);
  watch('source/js/*.js').on('change', browserSync.reload);
  watch('source/*.html').on('change', browserSync.reload);
};

exports.browsersync = browsersync;
exports.styles = styles;
exports.clean = clean;
exports.copy = copy;
exports.default = parallel(styles, browsersync, watcher);
exports.build = series(clean, copy);
