import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StTwoListSelectionComponent } from './st-two-list-selection.component';
import { StSpinnerModule } from '../st-spinner';

@NgModule({
   imports: [CommonModule, FormsModule, ReactiveFormsModule, StSpinnerModule],
   declarations: [StTwoListSelectionComponent],
   exports: [StTwoListSelectionComponent]
})
export class StTwoListSelectionModule { }
