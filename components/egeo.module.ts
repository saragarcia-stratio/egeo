import { NgModule, ModuleWithProviders }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { StInputComponent }  from './st-input';
import { StModalService } from './st-modal';
import { StInfoBoxComponent }  from './st-info-box';
import { StSpinnerComponent } from './st-spinner';
import { StTwoListSelectionComponent } from './st-two-list-selection';
import { StFooterComponent }  from './st-footer';
import { StInfoCardComponent } from './st-info-card';
import { StTooltip } from './st-tooltip';
import { StVerticalMenuComponent } from './st-vertical-menu/st-vertical-menu.component';
import { StHorizontalTabComponent } from './st-horizontal-tab/st-horizontal-tab.component';
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
import { StButtonComponent } from './st-button';

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
    TranslateService
  ],
  declarations: [
    StInputComponent, StSpinnerComponent, StTooltip, StTwoListSelectionComponent, StFooterComponent,
    StInfoBoxComponent, StInfoCardComponent, StVerticalMenuComponent, GosecListRowComponent, GosecListBodyComponent, GosecListHeaderComponent,
    GosecListComponent, GosecPaginationComponent, StHorizontalTabComponent, StTabBoxComponent, StRadioMenuComponent, StPageTitleComponent,
    StButtonComponent, StSearchComponent
  ],
  exports: [
    StInputComponent, StInfoBoxComponent, StSpinnerComponent, StTooltip, StTwoListSelectionComponent, StFooterComponent, StInfoCardComponent,
    StVerticalMenuComponent, GosecListComponent, StHorizontalTabComponent, StTabBoxComponent, StRadioMenuComponent, StPageTitleComponent,
    StButtonComponent, StSearchComponent
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
