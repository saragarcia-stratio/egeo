import { Component, ViewEncapsulation } from '@angular/core';
import { StHorizontalTab } from './../../../../egeo';
import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'horizontal-tab-example',
   template: require('./horizontal-tab.component.html'),
   styles: [require('./horizontal-tab.component.scss')]
})

export class HorizontalTabComponent {
   public apiDoc: ApiDoc;
   public tabs: StHorizontalTab[];
   public description: string = 'My tabs: ';

   constructor() {
      this.tabs = [
         {
            label: 'Tab1',
            number: 5,
            active: true
         }, {
            label: 'Tab2',
            number: 10,
            active: false
         }
      ];

      this.apiDoc = {
         title: 'Toggle buttons',
         description: 'Toggle buttons component is used to apply a specific filter according the selected tab. Each tab displays a number to indicate how many content fulfils its filter.',
         haveModel: true,
         apiSection: {
            inputs: [
               { paramName: 'tabs', type: 'Array<StHorizontalTab>', required: true, details: 'List of tabs with a label, number and status (active or not active)' },
               { paramName: 'description', type: TYPES.STR, required: false, details: 'Title displayed just before tabs to introduce them' },
               { paramName: 'qaTag', type: TYPES.STR, required: true, details: 'Id for qa search in automated test' }
            ],
            outputs: [
               { paramName: 'select', type: 'StHorizontalTab', required: true, details: 'This event is emitted when selected tab has changed. This event has the selected tab as param' }
            ]
         },
         exampleDesc: ``
      };
   }

   onSelectTab(tab: StHorizontalTab): void {
      console.log('Selected tab: ' + tab.label);
   }
}
