import { Component, ViewEncapsulation } from '@angular/core';
import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'info-box-example',
   template: require('./info-box.component.html'),
   styles: [require('./info-box.component.scss')],
   encapsulation: ViewEncapsulation.None
})

export class InfoBoxComponent {

   public apiDoc: ApiDoc = {
      title: 'Info Box',
      description: 'Info box component',
      haveModel: false,
      apiSection: {
         inputs: [
            { paramName: 'icon', type: TYPES.STR, required: false, details: 'Info Box header icon name' },
            { paramName: 'title', type: TYPES.STR, required: true, details: 'Info Box title' }
         ],
         outputs: []
      },
      exampleDesc: ``
   };

   constructor() {
   }

}
