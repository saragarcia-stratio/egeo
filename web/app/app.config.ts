import { provide } from '@angular/core';
import { Http } from '@angular/http';
import { TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';


export const APP_LANGUAGE_PROVIDERS = [
  provide(TranslateLoader, {
    useFactory: (http: Http): TranslateStaticLoader => new TranslateStaticLoader(http, '/assets/langs', '.json'),
    deps: [Http]
  })
];
