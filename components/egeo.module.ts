import { NgModule, ModuleWithProviders }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { StInputComponent }  from './st-input';
import { StModalService, MessageModal, StModal, StMessageModalComponent } from './st-modal';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ StInputComponent, StModal, StMessageModalComponent ],
  exports: [ StInputComponent, StModal, StMessageModalComponent ]
})
export class EgeoModule {
   static forRoot(): ModuleWithProviders {
    return {
      ngModule: EgeoModule,
      providers: [ StModalService ]
    };
  }
}
