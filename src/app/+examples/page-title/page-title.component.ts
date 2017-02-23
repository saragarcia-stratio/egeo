import { Component, ViewEncapsulation } from '@angular/core';
import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'page-title-example',
   templateUrl: './page-title.component.html',
   styleUrls: ['page-title.component.scss']
})

export class PageTitleComponent {
   public apiDoc: ApiDoc;
   public title: string = 'page title';

   constructor() {
      this.apiDoc = {
         title: 'Page title',
         description: 'Page title component is think for use in headers of pages.',
         haveModel: false,
         apiSection: {
            inputs: [
               { paramName: 'qaTag', type: TYPES.STR, required: true, details: 'Id for qa test' },
               { paramName: 'title', type: TYPES.STR, required: false, details: 'Title text to show, must be final text to show not allow translate' },
               { paramName: 'preTitle', type: TYPES.STR, required: false, details: 'Text previous to title for example to details like "USER:" username' },
               { paramName: 'leftButton', type: TYPES.STR, required: false, details: 'Icon class of button displayed  to the left of title.' }
            ],
            outputs: [
               { paramName: 'clickButton', type: TYPES.ANY, required: false, details: 'Event when click on leftButton' }
            ]
         },
         exampleDesc: `Next, we can see an example of Page title component showing a title and two elements in the right side.
         The right side content must be surrounded by page-title tags as you can see in html code below`
      };
   }



}
