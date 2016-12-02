module.exports = function (config) {
   var testWebpackConfig = require('./webpack/webpack.test.js')({ env: 'test' });

   var configuration = {
      basePath: '',

      frameworks: ['jasmine'],

      exclude: [],
      files: [{ pattern: './config/spec-bundle.js', watched: false }],
      preprocessors: { './config/spec-bundle.js': ['webpack', 'sourcemap'] },

      webpack: testWebpackConfig,

      webpackMiddleware: { stats: 'errors-only' },

      reporters: ['progress'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: false,
      browsers: ['PhantomJS'],

      phantomJsLauncher: {
         exitOnResourceError: true
      },
      // to avoid DISCONNECTED messages
      browserDisconnectTimeout: 10000, // default 2000
      browserDisconnectTolerance: 1, // default 0
      browserNoActivityTimeout: 30000, //default 10000

      singleRun: true
   };

   config.set(configuration);
};
