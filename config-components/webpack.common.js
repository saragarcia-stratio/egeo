var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = (CopyWebpackPlugin = require('copy-webpack-plugin'), CopyWebpackPlugin.default || CopyWebpackPlugin);
var helpers = require('./helpers');

module.exports = {
  entry: {
    'stratio-libs': './components/egeo.module.ts',
    'vendor-component' : './components/vendor.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts'
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
        exclude: helpers.root('components', 'stratio-libs'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: helpers.root('components', 'stratio-libs'),
        loader: 'raw'
      },
      {
        test: /\.scss$/,
        exclude: '/node_modules/',
        loaders: ['raw-loader', 'sass-loader', 'sass?sourceMap']
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['stratio-libs', 'vendor-component']
    }),
    new CopyWebpackPlugin([
      { from: 'components/assets', to: 'assets'}
    ])
  ]
};
