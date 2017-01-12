import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';

import { HeaderComponent } from './header';
import { RadioMenuComponent } from './radio-menu';

import { routing } from './navigation.routing';


@NgModule({
   imports: [SharedModule, routing],
   declarations: [
      HeaderComponent,
      RadioMenuComponent
   ],
   exports: [HeaderComponent, RadioMenuComponent]
})
export class NavigationModule { }
