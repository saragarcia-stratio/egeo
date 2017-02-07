import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StSpinnerComponent } from './st-spinner.component';

@NgModule({
   imports: [CommonModule],
   declarations: [StSpinnerComponent],
   exports: [StSpinnerComponent]
})
export class StSpinnerModule { }
