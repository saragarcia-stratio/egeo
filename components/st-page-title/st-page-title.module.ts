import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StPageTitleComponent } from './st-page-title.component';

@NgModule({
   imports: [CommonModule],
   declarations: [StPageTitleComponent],
   exports: [StPageTitleComponent]
})
export class StPageTitleModule { }
