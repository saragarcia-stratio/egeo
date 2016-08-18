import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

/* External libs */
import { TranslateService } from 'ng2-translate/ng2-translate';

/* App Root */
import { AppComponent }       from './app.component';
import { APP_LANGUAGE_PROVIDERS } from './app.config';

/* Other modules Imports */
import { LayoutModule } from './layout/layout.module';
import { routing } from './app.routing';

import { EgeoModule } from '../../components';

@NgModule({
  imports: [
    BrowserModule,
    LayoutModule,
    HttpModule,
    routing,
    EgeoModule.forRoot()
  ],
  declarations: [ AppComponent],
  providers: [ TranslateService, APP_LANGUAGE_PROVIDERS ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }



