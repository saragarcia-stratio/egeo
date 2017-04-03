import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

import { ExampleComponent } from './example.component';
import { StModalModule } from '../st-modal.module';
import { StModalService } from '../st-modal.service';
import { StButtonModule } from '../../st-button';
import { ModalTestComponent } from './modal-test.component';

@NgModule({
   imports: [
      CommonModule,
      StButtonModule,
      StModalModule.withComponents([ModalTestComponent])
   ],
   declarations: [ExampleComponent, ModalTestComponent],
   exports: [ExampleComponent],
   providers: [StModalService]
})
export class ExampleModule { }


export function getPaths(component: Type<any>): Routes {
   return [];
}
