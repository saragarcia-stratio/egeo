import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ROUTES } from './shared';

export const routes: Routes = [
  { path: '', redirectTo: 'libs', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
