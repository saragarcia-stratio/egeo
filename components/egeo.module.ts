import { NgModule, ModuleWithProviders }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';

import { StInputComponent }  from './st-input';
import { StModalService, MessageModal, StModal, StMessageModalComponent } from './st-modal';
import { StInfoBoxComponent }  from './st-info-box';
import { StUserMenuComponent } from './st-user-menu/st-user-menu.component';
import { StNotificationComponent } from './notification-manager/shared/';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
  declarations: [ StInputComponent, StModal, StMessageModalComponent, StUserMenuComponent, StNotificationComponent, StInfoBoxComponent ],
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
