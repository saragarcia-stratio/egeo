import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StModal } from './st-modal.component';
import { StButtonModule } from '../st-button';

@NgModule({
   imports: [CommonModule, StButtonModule],
   exports: [StModal],
   declarations: [StModal],
   entryComponents: [StModal],
   providers: []
})
export class StModalModule {
   static withComponents(components: any[]): any {
      return {
         ngModule: StModalModule,
         providers: [
            { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
         ]
      };
   }
}
