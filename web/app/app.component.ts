import { Component, ViewEncapsulation } from '@angular/core';
// import { TranslateService} from 'ng2-translate/ng2-translate';

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor() {
  }
  // constructor(translate: TranslateService) {
  //   let userLang = navigator.language.split('-')[0];
  //   userLang = /(es|en)/gi.test(userLang) ? userLang : 'en';

  //   translate.setDefaultLang('en');
  //   translate.use(userLang);
  // }

}
