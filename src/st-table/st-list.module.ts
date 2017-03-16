import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GosecListComponent } from './st-list.component';
import { GosecListBodyComponent, GosecListHeaderComponent, GosecListRowComponent, GosecPaginationComponent } from './shared';

@NgModule({
   imports: [CommonModule],
   declarations: [GosecListBodyComponent, GosecListHeaderComponent, GosecListRowComponent, GosecPaginationComponent, GosecListComponent],
   exports: [GosecListComponent]
})
export class StListModule { }
