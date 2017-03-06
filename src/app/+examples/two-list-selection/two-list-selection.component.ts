import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslateService } from 'ng2-translate';
import * as _ from 'lodash';

import {
   StTwoListSelectionElement,
   StTwoListSelectionConfigSchema,
   StTwoListSelectionConfig,
   EgeoResolveService
} from 'egeo';

@Component({
   selector: 'two-list-selection-example',
   templateUrl: './two-list-selection.component.html',
   styleUrls: ['two-list-selection.component.scss']
})

export class TwoListSelectionComponent {

   completeUserList: Array<StTwoListSelectionElement> = [];
   selectedUserList: Array<StTwoListSelectionElement> = [];

   config: Observable<StTwoListSelectionConfig>;
   configSchema: StTwoListSelectionConfigSchema = {
      allElementsListTitle: { key: 'TWO_LIST.ALL_ELEMENTS_TITLE', translate: true },
      allElementsSearchPlaceholder: { key: 'TWO_LIST.ALL_ELEMENTS_PLACEHOLDER', translate: true },
      selectedElementsListTitle: { key: 'TWO_LIST.SELECTED_ELEMENTS_TITLE', translate: true },
      selectedElementsSearchPlaceholder: { key: 'TWO_LIST.SELECTED_ELEMENTS_PLACEHOLDER', translate: true }
   };

   constructor(
      private egeoTranslate: EgeoResolveService,
      private translateService: TranslateService
   ) {
      this.fillLists();
      this.config = this.egeoTranslate.translate(this.configSchema, this.translateService);
   }

   showSelectedElements(): void {
      console.log(JSON.stringify(this.selectedUserList.map(item => item.name)));
   }

   private fillLists(): void {
      for (let i = 0; i < 300; i++) {
         this.completeUserList.push({
            id: i,
            name: `User-${i}`
         });
         if (i % 4 === 0) this.selectedUserList.push(_.clone(this.completeUserList[i]));
      }
   }
}
