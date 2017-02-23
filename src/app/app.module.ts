import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* External libs */
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

/* App Root */
import { AppComponent } from './app.component';

/* Other modules Imports */
import { LayoutModule } from './layout/layout.module';
import { routes } from './app.routing';

import { EgeoModule, StModalModule } from 'egeo';

import { AppStore, State } from './app.store';

// Hot Loader
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

export function TranslateConfig(http: Http): any {
   return new TranslateStaticLoader(http, 'assets/langs', '.json');
}

import {
   SharedModule
} from './shared';

import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';

import {
   ButtonComponent,
   ChangelogComponent,
   ChangelogService,
   ColorsComponent,
   DropdownComponent,
   DropdownMenuComponent,
   FooterComponent,
   GridComponent,
   IconsComponent,
   InfoBoxComponent,
   InfoCardComponent,
   InputComponent,
   ListComponent,
   LogoComponent,
   MainComponent,
   ModalComponent,
   PageTitleComponent,
   PaginationComponent,
   RegexpComponent,
   SearchComponent,
   SpinnerComponent,
   TabBoxComponent,
   ToggleButtonsComponent,
   TooltipComponent,
   TwoListSelectionComponent,
   TypographyComponent,
   VerticalTabsComponent
} from './+examples';

import { Component1Module, Component1 } from './+examples/modal/shared/component1';
import { Component2Module, Component2 } from './+examples/modal/shared/component2';

@NgModule({
   imports: [
      BrowserModule,
      LayoutModule,
      HttpModule,
      EgeoModule.forRoot(),
      TranslateModule.forRoot({
         provide: TranslateLoader,
         useFactory: (TranslateConfig),
         deps: [Http]
      }),
      RouterModule.forRoot(routes, { useHash: true }),
      SharedModule,
      MarkdownToHtmlModule,
      FormsModule,
      ReactiveFormsModule,
      Component1Module, Component2Module,
      StModalModule.withComponents([Component1, Component2])
   ],
   declarations: [
      AppComponent,
      ButtonComponent,
      ChangelogComponent,
      ColorsComponent,
      DropdownComponent,
      DropdownMenuComponent,
      FooterComponent,
      GridComponent,
      IconsComponent,
      InfoBoxComponent,
      InfoCardComponent,
      InputComponent,
      ListComponent,
      LogoComponent,
      MainComponent,
      ModalComponent,
      PageTitleComponent,
      PaginationComponent,
      RegexpComponent,
      SearchComponent,
      SpinnerComponent,
      TabBoxComponent,
      ToggleButtonsComponent,
      TooltipComponent,
      TwoListSelectionComponent,
      TypographyComponent,
      VerticalTabsComponent],
   bootstrap: [AppComponent],
   providers: [AppStore, ChangelogService]
})
export class AppModule {
   constructor(public appRef: ApplicationRef, public appStore: AppStore) { }
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
      const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
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


