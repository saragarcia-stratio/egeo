import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StAlertsElementModule } from './st-alerts.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StAlertsElementModule, { ngZone: 'noop'})
    .catch(err => console.error(err));
