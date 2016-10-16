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
   gulp.src(`${config.views.src}/**/*.html`)
     .pipe(swig({ defaults: { cache: false } }))
     .pipe(gulp.dest(config.views.dist))
 })

 let webpackFun = (isProd) => {
   let options = isProd ? webpackConfProd() : webpackConfDev()
   webpack(options, function(err, stats) {
     if (err) throw new gutil.PluginError("webpack", err);
     gutil.log('[webpack]', gutil.colors.red(stats.compilation.errors.toString({
       colors: true
     })))
     gutil.log('[webpack]', gutil.colors.yellow(stats.compilation.warnings.toString({
       colors: true
     })))
     gutil.log('[webpack]', gutil.colors.green(stats.toString({
       colors: true
     })))
   })
 }

 gulp.task('webpack', () => {
   webpackFun()
 })

 gulp.task('watch', () => {
   gulp.watch(`${config.views.watchSrc}/**/*.html`, ['swig'])
 })

 gulp.task('server', () => {
   browserSync.create().init({
     serveStatic: [config.root.dist],
     serveStaticOptions: {
       extensions: ['html', 'htm'] // pretty urls
     },
     open: false,
     port: config.port.dev,
     files: [config.root.dist]
   })
 })

 gulp.task('default', ['clean', 'swig', 'webpack', 'watch', 'server'])

 gulp.task('build', ['clean', 'swig'], () => {
   //waiting htmlfile generate
   setTimeout(() => {
     webpackFun(true)
   }, 800)
 })
