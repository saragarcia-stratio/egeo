import { StHorizontalTabsModule } from './st-horizontal-tabs/st-horizontal-tabs.module';
import { StHorizontalTabsComponent } from './st-horizontal-tabs/st-horizontal-tabs.component';
import { NgModule, ModuleWithProviders }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { StInputComponent }  from './st-input';
import { StModalService } from './st-modal';
import { StInfoBoxComponent }  from './st-info-box';
import { StSpinnerComponent } from './st-spinner';
import { StTwoListSelectionComponent } from './st-two-list-selection';
import { StFooterModule }  from './st-footer';
import { StInfoCardComponent } from './st-info-card';
import { StTooltip } from './st-tooltip';
import { StVerticalMenuComponent } from './st-vertical-menu/st-vertical-menu.component';
import { StToggleButtonsComponent } from './st-toggle-buttons/st-toggle-buttons.component';
import { StTabBoxComponent } from './st-tab-box/st-tab-box.component';
import { StRadioMenuComponent } from './st-radio-menu/st-radio-menu.component';
import { StPageTitleComponent } from './st-page-title';
import { StSearchComponent } from './st-search';
import {    GosecListRowComponent,
            GosecListBodyComponent,
            GosecListHeaderComponent,
            GosecListComponent,
            GosecPaginationComponent
        } from './st-table';
import { StHeaderModule } from './st-header';
import { StButtonComponent } from './st-button';
import { StDropdownModule } from './st-dropdown';
import { StDropdownMenuModule } from './st-dropdown-menu';


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
      useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/langs', '.json'),
      deps: [Http]
    }),
    StHeaderModule,
    StFooterModule,
    StDropdownModule,
    StDropdownMenuModule,
    StHorizontalTabsModule
  ],
  providers: [
    TranslateService
  ],
  declarations: [
    StInputComponent, StSpinnerComponent, StTooltip, StTwoListSelectionComponent,
    StInfoBoxComponent, StInfoCardComponent, StVerticalMenuComponent, GosecListRowComponent, GosecListBodyComponent, GosecListHeaderComponent,
    GosecListComponent, GosecPaginationComponent, StToggleButtonsComponent, StTabBoxComponent, StRadioMenuComponent, StPageTitleComponent,
    StButtonComponent, StSearchComponent
  ],
  exports: [
    StInputComponent, StInfoBoxComponent, StSpinnerComponent, StTooltip, StTwoListSelectionComponent, StInfoCardComponent,
    StVerticalMenuComponent, GosecListComponent, StToggleButtonsComponent, StTabBoxComponent, StRadioMenuComponent, StPageTitleComponent,
    StButtonComponent, StSearchComponent, StHeaderModule, StHorizontalTabsModule,  StDropdownModule, StDropdownMenuModule, StFooterModule
  ]
})
export class EgeoModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EgeoModule,
      providers: [ StModalService ]
    };
  }
}
