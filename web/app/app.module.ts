import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpModule, Http }    from '@angular/http';

/* External libs */
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

/* App Root */
import { AppComponent }       from './app.component';

/* Other modules Imports */
import { LayoutModule } from './layout/layout.module';
import { routing } from './app.routing';

import { EgeoModule } from '../../egeo';

@NgModule({
  imports: [
    BrowserModule,
    LayoutModule,
    HttpModule,
    routing,
    EgeoModule.forRoot(),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/langs', '.json'),
      deps: [Http]
    })
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }



