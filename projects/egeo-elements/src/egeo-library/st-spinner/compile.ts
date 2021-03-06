import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StSpinnerElementModule } from './st-spinner.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StSpinnerElementModule, { ngZone: 'noop'})
    .catch(err => console.error(err));
