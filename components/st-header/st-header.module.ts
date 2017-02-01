import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StHeaderComponent } from './st-header.component';
import {
   AppNameComponent,
   NavigationLinksComponent,
   SubmenuComponent,
   SubmenuPosDirective,
   UserMenuComponent,
   StHeaderBehaviorDirective
} from './shared';

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
