import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StInputComponent } from './st-input.component';
import { StTooltipModule } from '../st-tooltip';

@NgModule({
   imports: [CommonModule, FormsModule, ReactiveFormsModule, StTooltipModule],
   declarations: [StInputComponent],
   exports: [StInputComponent]
})
export class StInputModule { }
