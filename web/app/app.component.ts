import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService} from 'ng2-translate/ng2-translate';

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

}
