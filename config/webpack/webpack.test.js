const helpers = require('../helpers');
const path = require('path');

/**
 * Webpack Plugins
 */
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'test';

module.exports = {
      devtool: 'inline-source-map',

      resolve: {
         extensions: ['.ts', '.js', '.scss'],
         modules: ['node_modules', helpers.root('components')]
      },

      performance: {
         hints: false
      },

      module: {

         rules: [{
            enforce: 'post',
            test: /\.(js|ts)$/,
            loader: 'istanbul-instrumenter-loader',
            include: helpers.root('components'),
            exclude: [
               /\.(e2e|spec)\.ts$/,
               /node_modules/
            ]
         }, {
            test: /\.ts$/,
            loader: 'awesome-typescript-loader',
            query: {
               module: 'commonjs'
            }
         }, {
            test: /\.ts$/,
            loader: 'angular2-template-loader'
         }, {
            test: /\.html$/,
            loader: 'html-loader'
         }, {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)/,
            loader: 'null-loader'
         }, {
            test: /\.css$/,
            exclude: helpers.root('components', 'app'),
            loader: 'null-loader'
         }, {
            test: /\.css$/,
            include: helpers.root('components', 'app'),
            loader: 'raw-loader'
         }, {
            test: /\.scss$/,
            exclude: '/node_modules/',
            loaders: ['raw-loader', 'sass-loader']
         }]
      },

      plugins: [
      new ContextReplacementPlugin(
         // The (\\|\/) piece accounts for path separators in *nix and Windows
         /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
         helpers.root('./src') // location of your src
      )
   ]
}
