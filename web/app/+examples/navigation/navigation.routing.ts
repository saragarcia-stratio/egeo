import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header';
import { RadioMenuComponent } from './radio-menu';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: 'header', component: HeaderComponent },
   { path: 'radio-menu', component: RadioMenuComponent }
]);
