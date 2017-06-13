import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StRadioMenuComponent } from './st-radio-menu.component';
import { StRadioModule } from '../st-radio/st-radio.module';
import { SelectOneDispatcher } from '../utils/unique-dispatcher';

@NgModule({
   imports: [CommonModule, StRadioModule],
   declarations: [StRadioMenuComponent],
   exports: [StRadioMenuComponent],
   providers: [SelectOneDispatcher]
})
export class StRadioMenuModule {}
