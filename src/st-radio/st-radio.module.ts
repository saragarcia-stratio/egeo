import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StRadioGroupComponent } from './st-radio-group.component';
import { StRadioComponent } from './st-radio.component';


@NgModule({
   imports: [
      CommonModule
   ],
   exports: [
      StRadioComponent, StRadioGroupComponent
   ],
   declarations: [
      StRadioComponent, StRadioGroupComponent
   ],
   providers: []
})
export class StRadioModule { }
