import { Routes, RouterModule } from '@angular/router';
import { ROUTES } from './shared';

export const routes: Routes = [
  { path: '', redirectTo: 'libs', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes);
