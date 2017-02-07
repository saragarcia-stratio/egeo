import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StInputComponent } from './st-input.component';

@NgModule({
   imports: [CommonModule, FormsModule, ReactiveFormsModule],
   declarations: [StInputComponent],
   exports: [StInputComponent]
})
export class StInputModule { }
