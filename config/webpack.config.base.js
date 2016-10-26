import fs from 'fs'
import glob from 'glob'
import config from './index'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default function() {
  var _default = {
    entry: {},
    output: {
      path: `dist/`,
      publicPath: '/'
    },
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }]
    },
    babel: {
      presets: ['latest']
    },
    resolve: {
      modulesDirectories: ['../node_modules', '../app/js/components'],
      alias: {
        'vue$': 'vue/dist/vue.js'
      }
    },
    sassLoader: {
      includePaths: ['../node_modules'],
      sourceMapEmbed: true
    },
    plugins: []
  }

  glob.sync(`${config.script.src}/**/*.js`).forEach((files) => {
    let entry_name = path.relative(config.script.src, files).split('.')[0]
    _default.entry[entry_name] = files
  })

  return _default
}
