import { task } from 'gulp';

import { sequenceTask } from '../util/task_helpers';
import { composeRelease } from '../util/package-build';


task('build:release', sequenceTask(
   'library:clean-build',
   ':package:release'
));

/** Task that composes the different build files into the release structure. */
task(':package:release', () => composeRelease('egeo'));
