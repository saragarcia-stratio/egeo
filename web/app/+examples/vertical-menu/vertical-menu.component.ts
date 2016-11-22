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
      description: 'Vertical tab',
      haveModel: false,
      apiSection: {
         inputs: [
            { paramName: 'activeOption', type: TYPES.STR, required: false, details: 'Active option' },
            { paramName: 'options', type: TYPES.ARRAY_STR, required: true, details: 'Menu options' },
            { paramName: 'qaTag', type: TYPES.STR, required: true, details: 'Id value for qa test' }
         ],
         outputs: [
            { paramName: 'changedOption', type: 'any', required: true, details: 'Notify when active an option' }
         ]
      },
      exampleDesc: `example desc`
   };

   constructor() {
   }

   ngOnInit(): void {
      this.options = ['MENU.SERVICE', 'MENU.NODES', 'MENU.CASSANDRA'];
   }
}
