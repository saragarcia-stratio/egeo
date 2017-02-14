const helpers = require('../helpers');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const webpackMergeDll = webpackMerge.strategy({ plugins: 'replace' });

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const HMR = helpers.hasProcessFlag('hot');


const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const DllBundlesPlugin = require('webpack-dll-bundles-plugin').DllBundlesPlugin;

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
         path: helpers.root('target', 'site', 'web'),
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
         new DllBundlesPlugin({
            bundles: {
               polyfills: [
                  'core-js',
                  {
                     name: 'zone.js',
                     path: 'zone.js/dist/zone.js'
                  },
                  {
                     name: 'zone.js',
                     path: 'zone.js/dist/long-stack-trace-zone.js'
                  },
               ],
               vendor: [
                  '@angular/platform-browser',
                  '@angular/platform-browser-dynamic',
                  '@angular/core',
                  '@angular/common',
                  '@angular/forms',
                  '@angular/http',
                  '@angular/router',
                  '@angularclass/hmr',
                  'rxjs',
               ]
            },
            dllDir: helpers.root('dll'),
            webpackConfig: webpackMergeDll(commonConfig({ env: ENV }), {
               devtool: 'cheap-module-source-map',
               plugins: []
            })
         }),
         new AddAssetHtmlPlugin([
            { filepath: helpers.root(`dll/${DllBundlesPlugin.resolveFile('polyfills')}`) },
            { filepath: helpers.root(`dll/${DllBundlesPlugin.resolveFile('vendor')}`) }
         ]),
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
