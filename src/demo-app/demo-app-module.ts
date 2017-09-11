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
import { HttpModule } from '@angular/http';
// Hot Loader
import { AppStore, State } from './app/app.store';
import {
   removeNgStyles,
   createNewHosts,
   createInputTransfer
} from '@angularclass/hmr';

import { EgeoModule } from '@stratio/egeo';
import { EgeoDemoModule } from '@stratio/egeo-demo';

import { AppComponent } from './app/app.component';
import { routing } from './app/app.routing';
// Libs and external dependencies
import 'rxjs';
import './styles/global.scss';

@NgModule({
   imports: [
      BrowserModule,
      HttpModule,
      routing,
      EgeoModule.forRoot(),
      EgeoDemoModule
   ],
   declarations: [
      AppComponent
   ],
   entryComponents: [AppComponent],
   providers: [AppStore]
})
export class DemoAppModule {
   constructor(public appRef: ApplicationRef, public appStore: AppStore) { }

   ngDoBootstrap(): void {
      this.appRef.bootstrap(AppComponent);
   }

   hmrOnInit(store: any): void {
      if (!store || !store.state) {
         return;
      }
      console.log('HMR store', JSON.stringify(store, undefined, 2));
      // restore state
      this.appStore.setState(store.state);
      // restore input values
      if ('restoreInputValues' in store) {
         store.restoreInputValues();
      }
      this.appRef.tick();
      Object.keys(store).forEach(prop => delete store[prop]);
   }

   hmrOnDestroy(store: any): void {
      const cmpLocation = this.appRef.components.map(
         cmp => cmp.location.nativeElement
      );
      const currentState = this.appStore.getState();
      store.state = currentState;
      // recreate elements
      store.disposeOldHosts = createNewHosts(cmpLocation);
      // save input values
      store.restoreInputValues = createInputTransfer();
      // remove styles
      removeNgStyles();
   }

   hmrAfterDestroy(store: any): void {
      // display new elements
      store.disposeOldHosts();
      delete store.disposeOldHosts;
   }
}
