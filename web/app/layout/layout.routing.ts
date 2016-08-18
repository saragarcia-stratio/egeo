import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {
  ModalComponent,
  MainComponent,
  InputComponent
} from '../+examples';

export const routing = RouterModule.forChild([
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'main' },
      { path: 'main', component: MainComponent },
      { path: 'modal', component: ModalComponent },
      { path: 'input', component: InputComponent }
    ]
  }
]);
