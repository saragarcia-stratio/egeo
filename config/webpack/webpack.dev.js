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
 module: {
      rules: [
      //  {
      //    test: /\.ts$/,
      //    use: [
      //      {
      //        loader: 'tslint-loader',
      //        options: {
      //          configFile: 'tslint.json'
      //        }
      //      }
      //    ],
      //    exclude: [/\.(spec|e2e)\.ts$/]
      //  },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          include: [helpers.root('src', 'styles')]
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          include: [helpers.root('src', 'styles')]
        },

      ]

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
                  'lodash',
                  {
                     name: 'zone.js',
                     path: 'zone.js/dist/zone.js'
                  },
                  {
                     name: 'zone.js',
                     path: 'zone.js/dist/long-stack-trace-zone.js'
                  },
                  {
                     name: 'prismjs',
                     path: 'prismjs/prism.js'
                  }
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
            dllDir: helpers.root('temp', 'dll'),
            webpackConfig: webpackMergeDll(commonConfig({ env: ENV }), {
               devtool: 'cheap-module-source-map',
               plugins: []
            })
         }),
         new AddAssetHtmlPlugin([
            { filepath: helpers.root(`temp/dll/${DllBundlesPlugin.resolveFile('polyfills')}`) },
            { filepath: helpers.root(`temp/dll/${DllBundlesPlugin.resolveFile('vendor')}`) }
         ]),
      ],

      devServer: {
         port: PORT,
         host: HOST,
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
