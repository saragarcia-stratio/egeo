var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new DashboardPlugin(dashboard.setData)
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
