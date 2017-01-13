import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';

import { HeaderComponent, FakePageComponent } from './header';
import { RadioMenuComponent } from './radio-menu';

import { routing } from './navigation.routing';


@NgModule({
   imports: [SharedModule, routing],
   declarations: [
      HeaderComponent, FakePageComponent,
      RadioMenuComponent
   ],
   exports: [HeaderComponent, RadioMenuComponent]
})
export class NavigationModule { }
