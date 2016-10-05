import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { LayoutComponent } from './layout.component';
import {
  ModalComponent,
  MainComponent,
  InputComponent,
  InfoBoxComponent,
  ListComponent,
  SpinnerComponent,
  ModificableListComponent,
  FooterComponent,
  InfoCardComponent,
  TooltipComponent,
  RegexpComponent,
  VerticalMenuComponent,
  HorizontalTabComponent,
  TabBoxComponent,
  ApiDocExample
} from '../+examples';
import { routing } from './layout.routing';

import { LoadCodeComponent, ApiDocComponent, ParametersTableComponent } from '../shared';

import { EgeoModule } from '../../../components';

@NgModule({
  imports: [ CommonModule, routing, FormsModule, EgeoModule ],
  declarations: [
    LayoutComponent,
    LoadCodeComponent,
    ParametersTableComponent, ApiDocComponent, // For api doc in examples.
    ModalComponent,
    MainComponent,
    InputComponent,
    InfoBoxComponent,
    ListComponent,
    SpinnerComponent,
    ModificableListComponent,
    FooterComponent,
    InfoCardComponent,
    TooltipComponent,
    RegexpComponent,
    VerticalMenuComponent,
    HorizontalTabComponent,
    TabBoxComponent,
    ApiDocExample
  ]
})
export class LayoutModule { }
