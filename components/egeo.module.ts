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
import { StTooltip } from './st-tooltip';
import { StVerticalMenuComponent } from './st-vertical-menu/st-vertical-menu.component';
import { StHorizontalTabComponent } from './st-horizontal-tab/st-horizontal-tab.component';
import {    GosecListRowComponent,
            GosecListBodyComponent,
            GosecListHeaderComponent,
            GosecListComponent,
            GosecPaginationComponent
        } from './st-table';

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
  declarations: [
    StInputComponent, StUserMenuComponent, StNotificationComponent, StSpinnerComponent, StTooltip, StModificableListComponent, StFooterComponent,
    StInfoBoxComponent, StInfoCardComponent, StVerticalMenuComponent, GosecListRowComponent, GosecListBodyComponent, GosecListHeaderComponent,
    GosecListComponent, GosecPaginationComponent, StHorizontalTabComponent
  ],
  exports: [
    StInputComponent, StInfoBoxComponent, StSpinnerComponent, StTooltip, StModificableListComponent, StFooterComponent, StInfoCardComponent, 
    StVerticalMenuComponent, GosecListComponent, StHorizontalTabComponent
  ]
})
export class EgeoModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EgeoModule,
      providers: [StModalService]
    };
  }
}
