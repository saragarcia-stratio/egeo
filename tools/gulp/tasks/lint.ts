import gulp = require('gulp');
import { join } from 'path';

import { execNodeTask } from '../util/task_helpers';
import { DIST_EGEO, SOURCE_ROOT } from '../constants';

let tsconfigFile = join(SOURCE_ROOT, 'tsconfig.json');

gulp.task('lint', ['tslint', 'madge']);

/** Task that runs madge to detect circular dependencies. */
gulp.task('madge', ['library:clean-build'], execNodeTask('madge', ['--circular', DIST_EGEO]));

const tsLintBaseFlags = ['-c', 'tslint.json', '--type-check', '-p', tsconfigFile];

/** Task to run TSLint against the e2e/ and src/ directories. */
gulp.task('tslint', execNodeTask('tslint', tsLintBaseFlags));

/** Task that automatically fixes TSLint warnings. */
gulp.task('tslint:fix', execNodeTask('tslint', [...tsLintBaseFlags, '--fix']));
