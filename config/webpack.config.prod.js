import _default from './webpack.config.base'
import webpack from 'webpack'
import config from './index'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import RevReplacePlugin from 'webpack-rev-replace-plugin'

export default function(platform) {
  var options = _default
  options = options(platform)
  options.output.filename = 'script/[name].[chunkhash:6].js'
  options.module.loaders.push({
    test: /\.(png|jpg|gif|woff|woff2)$/,
    loader: 'url-loader?limit=8192&name=img/[name].[hash:6].[ext]'
  }, {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('css?minimize!sass')
  }, {
    test: /\.html$/,
    loader: 'html'
  })
  options.plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { drop_console: true } }))
  options.plugins.push(new ExtractTextPlugin('style/[name].[contenthash:6].css'))
  options.plugins.push(new RevReplacePlugin({
    cwd: `${config.views.dist}`,
    files: '**/*.html',
    outputPageName: function(filename) {
      return `./${filename}`
    },
    modifyReved: function(filename) {
      return filename.replace(/(\/style\/|\/script\/)/, '')
    }
  }))
  return options
}
