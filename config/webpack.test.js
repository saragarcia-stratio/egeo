const helpers = require('./helpers');
const path = require('path');

/**
 * Webpack Plugins
 */
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'test';

module.exports = function (options) {
   return {
      devtool: 'inline-source-map',

      resolve: {
         extensions: ['.ts', '.js'],
         modules: [path.resolve(__dirname, 'components'), 'node_modules']

      },
      module: {

         rules: [
            {
               enforce: 'pre',
               test: /\.js$/,
               use: 'source-map-loader',
               exclude: [
                  // these packages have problems with their sourcemaps
                  helpers.root('node_modules/rxjs'),
                  helpers.root('node_modules/@angular')
               ]
            },
            {
               test: /\.ts$/,
               use: 'awesome-typescript-loader',
               query: {
                  // use inline sourcemaps for "karma-remap-coverage" reporter
                  sourceMap: false,
                  inlineSourceMap: true,
                  compilerOptions: {
                     // Remove TypeScript helpers to be injected
                     // below by DefinePlugin
                     removeComments: true

                  }
               },
               exclude: [/\.e2e\.ts$/]
            },
            {
               test: /\.json$/,
               use: 'json-loader'
            },
            {
               test: /\.css$/,
               use: ['to-string-loader', 'css-loader']
            },
            {
               test: /\.html$/,
               use: 'raw-loader',
            },
            {
               test: /\.scss$/,
               exclude: '/node_modules/',
               use: ['raw-loader', 'sass-loader']
            },
            {
               enforce: 'post',
               test: /\.(js|ts)$/,
               use: 'istanbul-instrumenter-loader',
               include: helpers.root('components'),
               exclude: [
                  /\.(e2e|spec)\.ts$/,
                  /node_modules/
               ]
            }

         ]
      },

      plugins: [
         // NOTE: when adding more properties make sure you include them in custom-typings.d.ts
         new DefinePlugin({
            'ENV': JSON.stringify(ENV),
            'HMR': false,
            'process.env': {
               'ENV': JSON.stringify(ENV),
               'NODE_ENV': JSON.stringify(ENV),
               'HMR': false,
            }
         }),

         new ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root('components'), // location of your src
            {
               // your Angular Async Route paths relative to this root directory
            }
         ),

         new LoaderOptionsPlugin({
            debug: true,
            options: {

            }
         }),

      ],
      node: {
         global: true,
         process: false,
         crypto: 'empty',
         module: false,
         clearImmediate: false,
         setImmediate: false
      }

   };
}
