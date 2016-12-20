module.exports = function (config) {
   var testWebpackConfig = require('./webpack/webpack.test.js')({ env: 'test' });

   var configuration = {
      basePath: '',

      frameworks: ['jasmine'],

      exclude: [],
      files: [ { pattern: './config/spec-bundle.js', watched: false } ],
      preprocessors: { './config/spec-bundle.js': ['coverage', 'webpack', 'sourcemap'] },

      webpack: testWebpackConfig,

      coverageReporter: {
         /** For sonar */
         type : 'lcovonly',
         dir : 'target/coverage',
         file: '../../lcovUT.info'
         /** Uncoment in develop if you want coverage in console */
         // type: 'in-memory'
      },

      remapCoverageReporter: {
         'text-summary': null,
         json: './coverage/coverage.json',
         html: './coverage/html'
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
