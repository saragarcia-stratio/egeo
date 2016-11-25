import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'vertical-menu-example',
   template: require('./vertical-menu.component.html'),
   styles: [require('./vertical-menu.component.scss')],
   encapsulation: ViewEncapsulation.None
})

export class VerticalMenuComponent implements OnInit {
   options: Array<string>;
   qaTag: string = 'vertical-menu-example';

   public apiDoc: ApiDoc = {
      title: 'Vertical tabs',
      description: 'The vertical tabs is a component used for navigation purposes. It shows a set of links stacked like a vertical menu that can be used to put content at a side.',
      haveModel: false,
      apiSection: {
         inputs: [
            { paramName: 'activeOption', type: TYPES.STR, required: false, details: 'Current active option name' },
            { paramName: 'options', type: TYPES.ARRAY_STR, required: true, details: 'Menu option names' },
            { paramName: 'qaTag', type: TYPES.STR, required: true, details: 'Prefix used to generate the id values for qa tests' }
         ],
         outputs: [
            { paramName: 'changedOption', type: 'any', required: true, details: 'This event is emitted when active option has changed. It has the active option name as param' }
         ]
      },
      exampleDesc: `Next, you can see an example of vertical menu with three options.`
   };

   constructor() {
   }

   ngOnInit(): void {
      this.options = ['MENU.SERVICE', 'MENU.NODES', 'MENU.CASSANDRA'];
   }
}
