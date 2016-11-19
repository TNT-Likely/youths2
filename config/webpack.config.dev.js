import _default from './webpack.config.base'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default function() {
  var options = _default
  options = options()
  options.watch = true
  options = Object.assign({ watch: true }, options)
  options.output.filename = 'script/[name].js'
  options.module.loaders.push({
    test: /\.(png|jpg|gif|jpeg|woff|woff2)$/,
    loader: 'url-loader?limit=8192&name=img/[name].[ext]'
  }, {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('css!resolve-url!sass?sourceMap')
  }, {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('css')
  })
  options.plugins.push(new ExtractTextPlugin('style/[name].css'))

  return options
}
