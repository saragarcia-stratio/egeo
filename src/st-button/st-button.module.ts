import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

import { StButtonComponent } from './st-button.component';

@NgModule({
   imports: [ CommonModule ],
   declarations: [ StButtonComponent ],
   exports: [ StButtonComponent ]
})
export class StButtonModule {
}
