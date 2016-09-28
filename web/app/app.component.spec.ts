import {
  TestBed,
  inject
} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {Http} from '@angular/http';
import {TranslateModule, TranslateLoader, TranslateService, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import { StModalService } from './../../components/st-modal/st-modal.service';
import { RouterTestingModule } from '@angular/router/testing';


describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/langs', '.json'),
        deps: [Http]
      }), RouterTestingModule],
      providers: [TranslateService, StModalService ]
    });
  });

  let appComponent: AppComponent;

  beforeEach(inject([TranslateService, StModalService], (translate: TranslateService, modalService: StModalService) => {
      appComponent = new AppComponent(translate, modalService);
    }));

  it('should exist', () => {
    expect(appComponent).not.toBe(undefined);
  });
});
