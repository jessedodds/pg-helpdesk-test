const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const atImport = require('postcss-import')
const cssnext = require('postcss-cssnext')
const reporter = require('postcss-reporter')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  entry: [
    path.join(__dirname, 'components/app/index.js'),
    path.join(__dirname, 'components/app/index.css')
  ],
  output: {
    path: path.join(__dirname, 'bundle'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss')
    }]
  },
  postcss: function (webpack) {
    return [
      atImport({addDependencyTo: webpack}),
      cssnext,
      reporter({clearMessages: true})
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('bundle.css'),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./ root directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['./'] }
    })
  ]
}
