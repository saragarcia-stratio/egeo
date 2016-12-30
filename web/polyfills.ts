import 'core-js/es6';
import 'core-js/es7/reflect';

// Typescript emit helpers polyfill
import 'ts-helpers';

require('zone.js/dist/zone');

if (process.env.ENV === 'production') {
  // Production
} else {
  // Development
  // tslint:disable-next-line:no-string-literal
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
