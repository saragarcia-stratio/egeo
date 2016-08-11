import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { LayoutComponent } from './layout.component';
import { LibsComponent } from '../libs/libs.component';
import { routing } from './layout.routing';
import { EgeoModule } from '../../../components/main';

@NgModule({
  imports: [ CommonModule, routing, EgeoModule, FormsModule ],
  declarations: [ LayoutComponent, LibsComponent ],
})
export class LayoutModule { }
