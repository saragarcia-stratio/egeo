module.exports = function (config) {
   var testWebpackConfig = require('./webpack/webpack.test.js');

   var configuration = {
      basePath: '',

      frameworks: ['jasmine'],


      files: [
         './config/spec-bundle.js'
      ],
      exclude: [],
      preprocessors: { './config/spec-bundle.js': ['coverage', 'webpack', 'sourcemap'] },

      webpack: testWebpackConfig,

      coverageReporter: {
         type: 'in-memory'
      },

      remapCoverageReporter: {
         'text-summary': null,
         'json': './target/coverage/coverage.json',
         'html': './target/coverage/html',
         'lcovonly': './target/lcovUT.info'
      },

      webpackMiddleware: { stats: 'errors-only' },

      reporters: ['mocha', 'coverage', 'remap-coverage'],
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
