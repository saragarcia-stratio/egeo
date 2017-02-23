import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { StModal } from './st-modal.component';
import { StMessageModalComponent } from './shared';

@NgModule({
   imports: [BrowserModule, CommonModule ],
   exports: [ StModal, StMessageModalComponent ],
   declarations: [ StModal, StMessageModalComponent ],
   entryComponents: [StModal, StMessageModalComponent],
   providers: []
})
export class StModalModule {
   static withComponents(components: any[]): any {
        return {
            ngModule: StModalModule,
            providers: [
                {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true}
            ]
        };
    }
 }
