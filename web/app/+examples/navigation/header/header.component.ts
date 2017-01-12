import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ApiDoc, TYPES } from '../../../shared';

@Component({
   selector: 'header-example',
   template: require('./header.component.html'),
   styles: [require('./header.component.scss')],
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent {

   constructor() {
   }

   // tslint:disable:max-line-length
   // public apiDoc: ApiDoc = {
   //    title: 'Tooltip',
   //    description: 'The tooltip component is a text box that appear floating over an other UI component to explain further information about something related to the content or the component itself. It could be shown on click or on hover.',
   //    haveModel: false,
   //    apiSection: {
   //       inputs: [
   //          { paramName: 'text', type: TYPES.STR, required: true, details: 'Text to be shown inside the tooltip' },
   //          { paramName: 'showOnClick', type: TYPES.BOOL, required: false, details: 'TRUE: Show when click, FALSE: show on hover, DEFAULT: FALSE' },
   //          { paramName: 'qaTag', type: TYPES.STR, required: true, details: 'Id value for qa test' }
   //       ],
   //       outputs: []
   //    },
   //    exampleDesc: `example desc`
   // };
   // tslint:enable:max-line-length
}
