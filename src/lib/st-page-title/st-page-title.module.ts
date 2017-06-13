import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StButtonModule } from '../st-button/st-button.module';
import { StPageTitleComponent } from './st-page-title.component';

import { StInputAdjustable } from '../directives';

@NgModule({
   imports: [CommonModule, FormsModule, StButtonModule],
   declarations: [StPageTitleComponent, StInputAdjustable],
   exports: [StPageTitleComponent]
})
export class StPageTitleModule {}
