import {
  TestBed,
  inject
} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {Http} from '@angular/http';
import {TranslateModule, TranslateLoader, TranslateService, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {
  RouterTestingModule
} from '@angular/router/testing';


describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
        deps: [Http]
      }), RouterTestingModule],
      providers: [TranslateService   ]
    });
  });

  let appComponent: AppComponent;

  beforeEach(inject([TranslateService],(translate: TranslateService) => {
      appComponent = new AppComponent(translate);
    }));

  it('should exist', () => {
    expect(appComponent).not.toBe(undefined);
  });
});
