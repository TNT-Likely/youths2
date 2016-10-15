 import config from './config/index'
 import gulp from 'gulp'
 import swig from 'gulp-swig'
 import gutil from 'gulp-util'
 import del from 'del'
 import browserSync from 'browser-sync'
 import webpack from 'webpack'
 import webpackConfDev from './config/webpack.config.dev'
 import webpackConfProd from './config/webpack.config.prod'

 gulp.task('clean', function() {
   return del.sync([
     config.root.dist
   ], {
     force: true
   })
 })

 gulp.task('swig', () => {
   gulp.src(`${config.views.src}/*.html`)
     .pipe(swig())
     .pipe(gulp.dest(config.views.dist))
 })

 let webpackFun = (cb, isProd) => {
   let options = isProd ? webpackConfProd() : webpackConfDev()
   webpack(options, function(err, stats) {
     if (err) throw new gutil.PluginError("webpack", err);
     gutil.log(stats.compilation.errors.toString({
       colors: true
     }))
     gutil.log(`<<<<<<<webpack 编译成功>>>>>>>`)
     cb()
   })
 }

 gulp.task('webpack', (cb) => {
   webpackFun(cb)
 })

 gulp.task('watch', () => {
   gulp.watch(`${config.views.watchSrc}/**/*.html`, ['swig'])
   gulp.watch([`${config.root.dist}`], browserSync.reload)
 })

 gulp.task('server', () => {
   browserSync.init({
     server: {
       baseDir: config.root.dist,
       index: `views/index.html`
     },
     open: false,
     port: '8090',
   })
 })

 gulp.task('default', ['clean', 'swig', 'webpack', 'watch', 'server'])

 gulp.task('build', ['clean', 'swig'], (cb) => {
   //waiting htmlfile generate
   setTimeout(() => {
     webpackFun(cb, true)
   }, 800)
 })
