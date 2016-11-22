import { Component, ViewEncapsulation } from '@angular/core';
import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'info-card-example',
   template: require('./info-card.component.html'),
   styles: [require('./info-card.component.scss')],
   encapsulation: ViewEncapsulation.None
})

export class InfoCardComponent {

   public apiDoc: ApiDoc = {
      title: 'Info Card',
      description: 'Info Card component',
      haveModel: false,
      apiSection: {
         inputs: [
            { paramName: 'photo', type: TYPES.STR, required: true, details: 'photo' },
            { paramName: 'defaultPhoto', type: TYPES.STR, required: true, details: 'default photo' },
            { paramName: 'title', type: TYPES.STR, required: true, details: 'title' },
            { paramName: 'description', type: TYPES.STR, required: true, details: 'description' }
         ],
         outputs: []
      },
      exampleDesc: `This example show a info card component`
   };

   constructor() { }
}
