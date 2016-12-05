const webpack = require('webpack');
const helpers = require('../helpers');

const AssetsPlugin = require('assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const StringReplacePlugin = require("string-replace-webpack-plugin");

var CopyWebpackPlugin = (CopyWebpackPlugin = require('copy-webpack-plugin'), CopyWebpackPlugin.default || CopyWebpackPlugin);

module.exports = function (options) {
   return {
      entry: {
         'polyfills': './web/polyfills.ts',
         'vendor': './web/vendor.ts',
         'app': './web/main.ts'
      },

      resolve: {
         extensions: ['.js', '.ts'],
         modules: [helpers.root('web'), helpers.root('node_modules')],
      },

      module: {
         rules: [
            {
               test: /\.ts$/,
               use: [
                  'awesome-typescript-loader?declaration=false',
                  'angular2-template-loader',
                  'angular2-router-loader'
               ],
               exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
               test: /\.json$/,
               use: 'json-loader'
            },
            {
               test: /\.html$/,
               use: 'raw-loader',
               exclude: [helpers.root('web/index.html')]
            },
            {
               test: /\.css$/,
               use: ['to-string-loader', 'css-loader']
            },
            {
               test: /\.scss$/,
               exclude: '/node_modules/',
               use: ['to-string-loader', 'css-loader', 'sass-loader']
            },
            {
               test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
               use: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
               test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
               use: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
               test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
               use: "url-loader?limit=10000&minetype=application/octet-stream"
            },
            {
               test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
               use: "file-loader"
            },
            {
               test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
               use: "url-loader?limit=10000&minetype=image/svg+xml"
            },
            {
               test: /\.ico(\?v=\d+\.\d+\.\d+)?$/,
               use: "file-loader"
            }
         ]
      },

      plugins: [
         new AssetsPlugin({
            path: helpers.root('dist'),
            filename: 'webpack-assets.json',
            prettyPrint: true
         }),
         new StringReplacePlugin(),
         new CommonsChunkPlugin({
            name: ['polyfills', 'vendor'].reverse()
         }),

         new ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
            helpers.root('web'), // location of your src
            {
               // your Angular Async Route paths relative to this root directory
            }
         ),
         new CopyWebpackPlugin([
            { from: 'web/assets', to: 'assets' },
         ]),

         new HtmlWebpackPlugin({
            template: 'web/index.html'
         }),

         // Fix Angular 2
         new NormalModuleReplacementPlugin(
            /facade(\\|\/)async/,
            helpers.root('node_modules/@angular/core/src/facade/async.js')
         ),
         new NormalModuleReplacementPlugin(
            /facade(\\|\/)collection/,
            helpers.root('node_modules/@angular/core/src/facade/collection.js')
         ),
         new NormalModuleReplacementPlugin(
            /facade(\\|\/)errors/,
            helpers.root('node_modules/@angular/core/src/facade/errors.js')
         ),
         new NormalModuleReplacementPlugin(
            /facade(\\|\/)lang/,
            helpers.root('node_modules/@angular/core/src/facade/lang.js')
         ),
         new NormalModuleReplacementPlugin(
            /facade(\\|\/)math/,
            helpers.root('node_modules/@angular/core/src/facade/math.js')
         )
      ],
   }
};
