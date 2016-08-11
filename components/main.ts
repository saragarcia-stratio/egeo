import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { StInputComponent }  from './st-input';
import { STVALIDATIONS }  from './st-validations';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ StInputComponent ],
  exports: [ StInputComponent ]
})
export class EgeoModule { }
