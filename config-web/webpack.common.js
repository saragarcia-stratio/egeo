var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = (CopyWebpackPlugin = require('copy-webpack-plugin'), CopyWebpackPlugin.default || CopyWebpackPlugin);
var helpers = require('./helpers');

module.exports = {
   entry: {
      'polyfills': './web/polyfills.ts',
      'vendor-web': './web/vendor.ts',
      'app': './web/main.ts'
   },

   resolve: {
      extensions: ['', '.js', '.ts']
   },

   module: {
      loaders: [
         {
            test: /\.ts$/,
            loaders: ['awesome-typescript-loader', 'angular2-template-loader']
         },
         {
            test: /\.html$/,
            loader: 'html'
         },
         {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file?name=assets/[name].[hash].[ext]'
         },
         {
            test: /\.css$/,
            exclude: helpers.root('web', 'app'),
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
         },
         {
            test: /\.css$/,
            include: helpers.root('web', 'app'),
            loader: 'to-string!css-loader!postcss-loader'
         },
         {
            test: /\.scss$/,
            exclude: '/node_modules/',
            loader: 'to-string!css-loader!postcss-loader!sass-loader'
         }
      ]
   },

   plugins: [
      new webpack.optimize.CommonsChunkPlugin({
         name: ['app', 'vendor-web', 'polyfills']
      }),

      new CopyWebpackPlugin([
         { from: 'web/assets', to: 'assets'}
      ]),

      new HtmlWebpackPlugin({
         template: 'web/index.html'
      })
   ],

   postcss: [
      require('postcss-cssnext')({
         browsers: ['ie >= 10', 'last 2 versions']
      })
   ]
};
