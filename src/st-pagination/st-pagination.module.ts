import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StPaginationComponent } from './st-pagination.component';
import { StPaginationPipe } from './st-pagination.pipe';
import { StPaginationService } from './st-pagination.service';

import { StButtonModule } from '../st-button';
import { StDropdownModule } from '../st-dropdown';

@NgModule({
   imports: [ CommonModule, StButtonModule, StDropdownModule ],
   exports: [ StPaginationComponent, StPaginationPipe ],
   declarations: [ StPaginationComponent, StPaginationPipe ],
   providers: [
      StPaginationService
   ]
})
export class StPaginationModule { }
