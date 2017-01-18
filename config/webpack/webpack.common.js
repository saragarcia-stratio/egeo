const webpack = require('webpack');
const helpers = require('../helpers');

const AssetsPlugin = require('assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

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

      performance: {
         hints: false
      },

      module: {
         rules: [
            {
               test: /\.ts$/,git
               use: [
                  '@angularclass/hmr-loader',
                  'awesome-typescript-loader?declaration=false',
                  'angular2-template-loader',
<<<<<<< 8d8fc93c8c0d5d6ab7b7531979c96c17a3ae0ae6
                  'angular-router-loader'
=======
                  'angular2-router-loader'
>>>>>>> Refactor Hot Loader
               ],
               exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
               test: /\.html$/,
               use: 'raw-loader',
               exclude: [helpers.root('web/index.html')]
            },
                       {
               test: /\.css$/,
               use: ['style-loader', 'css-loader']
            },
            {
               test: /\.scss$/,
               exclude: '/node_modules/',
               use: ['raw-loader', 'sass-loader']
            },
            {
               test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
               use: "file-loader?name=assets/fonts/[name].[hash].[ext]"
            }
         ]
      },

      plugins: [
         new AssetsPlugin({
            path: helpers.root('dist'),
            filename: 'webpack-assets.json',
            prettyPrint: true
         }),
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
            { from: 'CHANGELOG.md', to: 'CHANGELOG.md' }
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
