import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'vertical-tabs-example',
   templateUrl: './vertical-tabs.component.html',
   styleUrls: ['vertical-tabs.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class VerticalTabsComponent {

   // tslint:disable:max-line-length
   public apiDoc: ApiDoc = {
      title: 'Vertical tabs',
      description: 'The vertical tabs is a component used for navigation purposes. It shows a set of links stacked like a vertical tabs that can be used to put content at a side.',
      haveModel: false,
      apiSection: {
         inputs: [
            { paramName: 'activeOption', type: TYPES.STR, required: false, details: 'Current active option name' },
            { paramName: 'options', type: TYPES.ARRAY_STR, required: true, details: 'tabs option names, must be translated' },
            { paramName: 'qaTag', type: TYPES.STR, required: true, details: 'Prefix used to generate the id values for qa tests' }
         ],
         outputs: [
            { paramName: 'changedOption', type: 'any', required: true, details: 'This event is emitted when active option has changed. It has the active option name as param' }
         ]
      },
      exampleDesc: `Next, you can see an example of vertical tabs with three options.`
   };
   // tslint:enable:max-line-length

   options: Array<string> = ['Service', 'Nodes', 'Cassandra'];
   active: string = this.options[0];
   qaTag: string = 'vertical-tabs-example';

   onChangeOption(active: string): void {
      this.active = active;
   }
}
