var helpers = require('./helpers');

module.exports = {
   devtools: 'source-map',

   resolve: {
      extensions: ['', '.ts', '.js']
   },

   module: {
      preLoaders: [
         {
            test: /\.ts$/,
            loader: 'tslint-loader',
            exclude: [helpers.root('node_modules')]
         }
      ],
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
            loader: 'null'
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
      ],

      tslint: {
         emitErrors: false,
         failOnHint: false,
         resourcePath: 'web'
      },
   },
   postcss: [
      require('postcss-cssnext')({
         browsers: ['ie >= 10', 'last 2 versions']
      })
   ]
};
