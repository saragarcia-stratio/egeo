import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StPageTitleComponent } from './st-page-title.component';
import { StButtonModule } from '../st-button';

@NgModule({
   imports: [CommonModule, StButtonModule],
   declarations: [StPageTitleComponent],
   exports: [StPageTitleComponent]
})
export class StPageTitleModule { }
