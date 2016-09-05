import { NgModule, ModuleWithProviders }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { StInputComponent }  from './st-input';
import { StModalService, MessageModal, StModal, StMessageModalComponent } from './st-modal';
import { StInfoBoxComponent }  from './st-info-box';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ StInputComponent, StModal, StMessageModalComponent, StInfoBoxComponent],
  exports: [ StInputComponent, StModal, StMessageModalComponent, StInfoBoxComponent ]
})
export class EgeoModule {
   static forRoot(): ModuleWithProviders {
    return {
      ngModule: EgeoModule,
      providers: [ StModalService ]
    };
  }
}
