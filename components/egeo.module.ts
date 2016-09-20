import { NgModule, ModuleWithProviders }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { StInputComponent }  from './st-input';
import { StModalService, MessageModal, StModal, StMessageModalComponent, provideComponentOutletModule } from './st-modal';
import { StInfoBoxComponent }  from './st-info-box';
import { StSpinnerComponent } from './st-spinner';
import { StModificableListComponent } from './st-modificable-list';
import { StFooterComponent }  from './st-footer';
import { StUserMenuComponent } from './st-user-menu/st-user-menu.component';
import { StNotificationComponent } from './notification-manager/shared/';
import { StInfoCardComponent } from './st-info-card';
import {StVerticalMenuComponent} from './st-vertical-menu/st-vertical-menu.component';

/* External libs */
import {
  TranslateModule,
  TranslateLoader,
  TranslateStaticLoader,
  TranslateService
} from 'ng2-translate/ng2-translate';

@NgModule({
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/langs', '.json'),
      deps: [Http]
    })
  ],
  providers: [
    provideComponentOutletModule({
      imports: [CommonModule]
    }),
    TranslateService
  ],
  declarations: [StInputComponent, StUserMenuComponent, StNotificationComponent, StSpinnerComponent, StModificableListComponent, StFooterComponent,
    StInfoBoxComponent, StInfoCardComponent, StVerticalMenuComponent],
  exports: [StInputComponent, StInfoBoxComponent, StSpinnerComponent, StModificableListComponent, StFooterComponent, StInfoCardComponent, StVerticalMenuComponent]
})
export class EgeoModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EgeoModule,
      providers: [StModalService]
    };
  }
}
