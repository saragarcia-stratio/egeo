import { TranslateService } from 'ng2-translate/ng2-translate';
import { StHorizontalTab } from './../../../../../components/st-horizontal-tabs/st-horizontal-tabs.model';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ApiDoc, TYPES } from './../../../shared';
import { } from 'egeo/egeo';
@Component({
   selector: 'horizontal-tabs-example',
   templateUrl: './horizontal-tabs.component.html'
})

export class HorizontalTabsComponent implements OnInit {
   options: Array<StHorizontalTab>;
   qaTag: string = 'horizontal-tabs-example';

   // tslint:disable:max-line-length
   public apiDoc: ApiDoc = {
      title: 'Horizontal tabs',
      description: 'The horizontal tabs is a component used for navigation purposes. Is used to display different sections in the same space',
      haveModel: true,
      apiSection: {
         inputs: [
            { paramName: 'options', type: TYPES.ARRAY_OBJ, required: true, details: 'An array of StHorizontalTab objects (see below) that defines the links that will appear and that will be disabled' },
            { paramName: 'qaTag', type: TYPES.STR, required: true, details: 'Prefix used to generate the id values for qa tests' },
            { paramName: 'activeOption', type: TYPES.STR, required: false, details: 'Current active option name' }
         ],
         outputs: [
            {
              paramName: 'changedOption',
              type: 'string',
              required: true,
              details: 'This event is emitted when active option has changed. It has the active option name as param'
            }
         ]
      },
      exampleDesc: `Next, you can see an example of horizontal menu with four options, One of them disabled.`
   };
   // tslint:enable:max-line-length

   ngOnInit(): void {
      this.options = [
         {text: 'SERVICES', isDisabled: false},
         {text: 'NODES', isDisabled: false },
         {text: 'CASSANDRA', isDisabled: false },
         {text: 'DISABLED', isDisabled: true}
      ];
   }
}
