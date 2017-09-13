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
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EgeoModule } from '@stratio/egeo';
import { EgeoDemoModule } from '@stratio/egeo-demo';

import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';

@NgModule({
   imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule,
      EgeoModule.forRoot(),
      EgeoDemoModule
   ],
   declarations: [AppComponent],
   bootstrap: [AppComponent]
})
export class DemoAppModule { }
