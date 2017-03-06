import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualScrollComponent } from './st-virtual-scroll.component';

@NgModule({
   imports: [CommonModule],
   declarations: [VirtualScrollComponent],
   exports: [VirtualScrollComponent]
})
export class VirtualScrollModule { }
