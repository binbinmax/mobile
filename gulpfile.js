var gulp          = require('gulp'),
    browserSync   = require('browser-sync').create(),
    scss          = require('gulp-sass'),
    filter        = require('gulp-filter'),
    reload        = browserSync.reload,
    cssmin        = require('gulp-clean-css'),
    uglify        = require('gulp-uglify'),//js压缩
    autoprefixer  = require('gulp-autoprefixer');
// 静态服务器 + 监听 scss/html 文件
gulp.task('serve', ['scss','js'], function() {
    browserSync.init({
        server: "./src"
    });
    gulp.watch("src/scss/*.scss", ['scss']);
    gulp.watch("src/distjs/*.js", ['js']);
    gulp.watch("src/**/*.html").on('change', reload);
});
// scss编译后的css将注入到浏览器里实现更新
gulp.task('scss', function() {
    return gulp.src("src/scss/index.scss")
        .pipe(scss().on('error', scss.logError))
        .pipe(cssmin())       //开启压缩css
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(gulp.dest("src/css"))
        .pipe(filter('**/*.css'))
        .pipe(reload({stream: true}));
});
// 处理完JS文件后返回流
gulp.task('js', function () {
  gulp.src(['src/distjs/*.js'])
        .pipe(uglify())     //压缩js
        .pipe(gulp.dest('src/js'));
        reload();
});
gulp.task('default', ['serve']);
