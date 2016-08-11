import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { LibsComponent } from '../libs/libs.component';

export const routing = RouterModule.forChild([
  { path: '', component: LayoutComponent, children: [
    { path: 'libs', component: LibsComponent }
  ]},
]);
