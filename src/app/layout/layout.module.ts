import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';


import { SharedModule } from '../shared';



@NgModule({
   imports: [SharedModule, RouterModule],
   declarations: [
      LayoutComponent
   ],
   providers: [],
   exports: [ LayoutComponent ]
})
export class LayoutModule { }
