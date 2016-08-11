var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://0.0.0.0:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: 'web'
  },

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    proxy: {
      '/api*': {
        target: 'http://localhost:3005/',
        secure: false
      }
    }
  }
});
