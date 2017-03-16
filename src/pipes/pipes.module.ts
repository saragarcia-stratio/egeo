import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StFilterList } from './search-filter.pipe';

@NgModule({
   imports: [CommonModule],
   declarations: [StFilterList],
   exports: [StFilterList]
})
export class PipesModule { }
