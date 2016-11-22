import { Component, ViewEncapsulation } from '@angular/core';
import { StTab } from './../../../../components';
import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'tab-box-example',
   template: require('./tab-box.component.html'),
   styles: [require('./tab-box.component.scss')],
   encapsulation: ViewEncapsulation.None
})

export class TabBoxComponent {
   tabs: StTab[];
   selectedTab: StTab;

   public apiDoc: ApiDoc = {
      title: 'Tab Box',
      description: 'Tab box component',
      haveModel: true,  // True for show label False for hide
      apiSection: {
         inputs: [
            { paramName: 'tabs', type: 'Array<StTab>', required: true, details: 'tabs' },
            { paramName: 'qaTag', type: TYPES.STR, required: true, details: 'qaTag' }
         ],
         outputs: [
            { paramName: 'select', type: 'StTab', required: true, details: 'Selected tab' }
         ]
      },
      exampleDesc: `Example documentation text`
   };

   constructor() {
      this.tabs = [
         {
            label: 'Tab1',
            active: true
         }, {
            label: 'Tab2',
            active: false
         }
      ];

      this.selectedTab = this.tabs[0];
   }

   onSelectTab(tab: StTab): void {
      this.selectedTab = tab;
   }
}
