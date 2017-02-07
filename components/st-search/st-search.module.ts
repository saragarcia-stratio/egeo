import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StSearchComponent } from './st-search.component';

@NgModule({
   imports: [CommonModule],
   declarations: [StSearchComponent],
   exports: [StSearchComponent]
})
export class StSearchModule { }
