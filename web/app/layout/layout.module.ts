import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { LayoutComponent } from './layout.component';
import {
  ModalComponent,
  MainComponent,
  InputComponent,
  InfoBoxComponent,
  SpinnerComponent,
  ModificableListComponent,
  FooterComponent,
  InfoCardComponent,
  RegexpComponent
} from '../+examples';
import { routing } from './layout.routing';

import { LoadCodeComponent } from '../shared';

import { EgeoModule } from '../../../components';

@NgModule({
  imports: [ CommonModule, routing, FormsModule, EgeoModule ],
  declarations: [
    LayoutComponent,
    LoadCodeComponent,
    ModalComponent,
    MainComponent,
    InputComponent,
    InfoBoxComponent,
    SpinnerComponent,
    ModificableListComponent,
    FooterComponent,
    InfoCardComponent,
    RegexpComponent
  ]
})
export class LayoutModule { }
