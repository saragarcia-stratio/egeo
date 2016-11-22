import { Component, ViewEncapsulation } from '@angular/core';
import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'tooltip-example',
   template: require('./tooltip.component.html'),
   styles: [require('./tooltip.component.scss')],
   encapsulation: ViewEncapsulation.None
})

export class TooltipComponent {

   public apiDoc: ApiDoc = {
      title: 'Tooltip',
      description: 'Tooltip',
      haveModel: false,
      apiSection: {
         inputs: [
            { paramName: 'text', type: TYPES.STR, required: true, details: 'Text to be shown inside the tooltip' },
            { paramName: 'showOnClick', type: TYPES.BOOL, required: false, details: 'TRUE: Show when click, FALSE: show on hover, DEFAULT: FALSE' },
            { paramName: 'qaTag', type: TYPES.STR, required: true, details: 'Id value for qa test' }
         ],
         outputs: []
      },
      exampleDesc: `example desc`
   };
}
