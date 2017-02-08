import { Component, ViewEncapsulation } from '@angular/core';
import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'info-card-example',
   templateUrl: './info-card.component.html'
})

export class InfoCardComponent {

   // tslint:disable:max-line-length
   public apiDoc: ApiDoc = {
      title: 'Info Card',
      description: 'Info card component is used to display a list of elements in a grid. These elements are shown with an identification logo and a short information.',
      haveModel: false,
      apiSection: {
         inputs: [
            { paramName: 'photo', type: TYPES.STR, required: true, details: 'Photo url' },
            { paramName: 'defaultPhoto', type: TYPES.STR, required: true, details: 'Default photo that will be displayed in case of photo url is broken' },
            { paramName: 'title', type: TYPES.STR, required: true, details: 'Title of the info card' },
            { paramName: 'description', type: TYPES.STR, required: true, details: 'A short description about the content.' },
            { paramName: 'qaTag', type: TYPES.STR, required: false, details: 'Id for qa search in automated test, if this is not defined, title will be set as qaTag' }
         ],
         outputs: []
      },
      exampleDesc: `Next, you can see how info cards are shown in a grid.`
   };
   // tslint:enable:max-line-length

   constructor() { }
}
