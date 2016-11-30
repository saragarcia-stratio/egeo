const helpers = require('./helpers');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const HMR = helpers.hasProcessFlag('hot');

const METADATA = webpackMerge(commonConfig({ env: ENV }).metadata, {
   host: HOST,
   port: PORT,
   ENV: ENV,
   HMR: HMR
});

module.exports = function (options) {
   return webpackMerge(commonConfig({ env: ENV }), {

      devtool: 'inline-source-map',

      output: {
         path: helpers.root('dist'),
         filename: '[name].js',
         sourceMapFilename: '[name].map',
         chunkFilename: '[id].chunk.js',
         library: 'ac_[name]',
         libraryTarget: 'var',


      },

      plugins: [
         new LoaderOptionsPlugin({
            debug: true,
            options: {

            }
         }),
      ],

      devServer: {
         port: METADATA.port,
         host: METADATA.host,
         historyApiFallback: true,
         stats: "errors-only",
         clientLogLevel: "warning"
      },
      node: {
         global: true,
         crypto: 'empty',
         process: true,
         module: false,
         clearImmediate: false,
         setImmediate: false
      }
   });
}
