import { StToggleButton } from './../../../../components/st-toggle-buttons/st-toggle-buttons.interface';
import { Component, ViewEncapsulation } from '@angular/core';
import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'toggle-buttons-example',
   templateUrl: './toggle-buttons.component.html',
   styleUrls: ['toggle-buttons.component.scss']
})

export class ToggleButtonsComponent {
   public apiDoc: ApiDoc;
   public tabs: StToggleButton[];
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
      // tslint:disable:max-line-length
      this.apiDoc = {
         title: 'Toggle buttons',
         description: 'Toggle buttons component is used to apply a specific filter according the selected tab. Each tab displays a number to indicate how many content fulfils its filter.',
         haveModel: true,
         apiSection: {
            inputs: [
               { paramName: 'tabs', type: 'Array<StToggleButton>', required: true, details: 'List of tabs with a label, number and status (active or not active)' },
               { paramName: 'description', type: TYPES.STR, required: false, details: 'Title displayed just before tabs to introduce them' },
               { paramName: 'qaTag', type: TYPES.STR, required: true, details: 'Id for qa search in automated test' }
            ],
            outputs: [
               { paramName: 'select', type: 'StToggleButton', required: true, details: 'This event is emitted when selected tab has changed. This event has the selected tab as param' }
            ]
         },
         exampleDesc: ``
      };
      // tslint:enable:max-line-length
   }

   onSelectTab(tab: StToggleButton): void {
      console.log('Selected tab: ' + tab.label);
   }
}
