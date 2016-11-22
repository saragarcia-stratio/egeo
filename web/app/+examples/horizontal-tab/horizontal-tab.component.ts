import { Component, ViewEncapsulation } from '@angular/core';
import { StHorizontalTab } from './../../../../components/';
import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'horizontal-tab-example',
   template: require('./horizontal-tab.component.html'),
   styles: [require('./horizontal-tab.component.scss')],
   encapsulation: ViewEncapsulation.None
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
         title: 'Toogle buttons',
         description: 'Toogle buttons component',
         haveModel: true,
         apiSection: {
            inputs: [
               { paramName: 'tabs', type: 'Array<StHorizontalTab>', required: true, details: 'Array of StHorizontalTab' },
               { paramName: 'description', type: TYPES.STR, required: false, details: 'Description' },
               { paramName: 'qaTag', type: TYPES.STR, required: true, details: 'Id for qa search in automated test' }
            ],
            outputs: [
               { paramName: 'select', type: 'StHorizontalTab', required: true, details: 'Type: StHorizontalTab' }
            ]
         },
         exampleDesc: ``
      };
   }

   onSelectTab(tab: StHorizontalTab): void {
      console.log('Selected tab: ' + tab.label);
   }
}
