import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
   AppNameComponent,
   NavigationLinksComponent,
   StHeaderBehaviorDirective,
   SubmenuComponent,
   SubmenuPosDirective,
   UserMenuComponent
} from './shared';
import { StHeaderComponent } from './st-header.component';

@NgModule({
   imports: [CommonModule, RouterModule],
   declarations: [
      SubmenuPosDirective,
      StHeaderComponent,
      AppNameComponent,
      NavigationLinksComponent,
      SubmenuComponent,
      UserMenuComponent,
      StHeaderBehaviorDirective
   ],
   exports: [StHeaderComponent, StHeaderBehaviorDirective]
})
export class StHeaderModule { }
