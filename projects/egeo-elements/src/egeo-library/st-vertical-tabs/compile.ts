import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StVerticalTabsElementModule } from './st-vertical-tabs.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StVerticalTabsElementModule, { ngZone: 'noop'})
    .catch(err => console.error(err));
