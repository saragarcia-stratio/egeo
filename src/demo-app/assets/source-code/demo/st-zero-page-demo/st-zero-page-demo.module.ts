/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StDemoGeneratorModule, StDocsModule, StWidgetModule, StZeroPageModule } from '@stratio/egeo';

import { StZeroPageDemoComponent } from './st-zero-page-demo.component';

@NgModule({
   imports: [
      CommonModule,
      StZeroPageModule,
      StDemoGeneratorModule.withComponents({ components: [StZeroPageDemoComponent] }),
      StDocsModule
   ],
   declarations: [StZeroPageDemoComponent]
})
export class StZeroPageDemoModule { }
