import {
   TestBed
} from '@angular/core/testing';

import {Http} from '@angular/http';
import {
   TranslateModule, TranslateLoader, TranslateService, TranslateStaticLoader
}
   from 'ng2-translate/ng2-translate';
import {
   RouterTestingModule
} from '@angular/router/testing';
import {StRadioMenuComponent} from './st-radio-menu.component';


describe('StRadioMenuComponent', () => {
   beforeEach(() => {
      TestBed.configureTestingModule({
         declarations: [StRadioMenuComponent],
         imports: [TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
            deps: [Http]
         }), RouterTestingModule],
         providers: [TranslateService]
      });
   });

   let stRadioMenuComponent: StRadioMenuComponent;

   beforeEach(() => {
      stRadioMenuComponent = new StRadioMenuComponent();
   });

   it('should be able to return if an option is active', () => {
      let activeOptionName = 'active option';

      stRadioMenuComponent.activeOption = activeOptionName;

      expect(stRadioMenuComponent.isActive('another option')).toBeFalsy();
      expect(stRadioMenuComponent.isActive(activeOptionName)).toBeTruthy();
   });

   describe('should be able to activate an option', function() {
      let activeOptionName = 'active option';

      it('when active option is changed, its name are updated', function() {
         stRadioMenuComponent.activateOption(activeOptionName);

         expect(stRadioMenuComponent.activeOption).toBe(activeOptionName);
      });

      it('when active option is changed, an event is emitted with the active option name', function() {
         spyOn(stRadioMenuComponent.changedOption, 'emit');

         stRadioMenuComponent.activateOption(activeOptionName);

         expect(stRadioMenuComponent.changedOption.emit).toHaveBeenCalledWith(activeOptionName);
      });

   });
});
