import { Component, ViewEncapsulation } from '@angular/core';
import { StFooterLink } from '../../../../components';
import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'footer-example',
   template: require('./footer.component.html'),
   styles: [require('./footer.component.scss')],
   encapsulation: ViewEncapsulation.None
})

export class FooterComponent {
   public apiDoc: ApiDoc;
   private rightsText: string;
   private links: Array<StFooterLink> = new Array<StFooterLink>();

   constructor() {
      this.rightsText = '© Stratio Big Data Inc. All Rights Reserved';
      this.links.push({
         title: 'Legal Terms',
         url: 'http://www.google.es'
      });
      this.links.push({
         title: 'Help',
         url: 'http://www.google.es'
      });

      this.apiDoc = {
         title: 'Footer',
         description: 'The footer component is used to create a consistent user experience across the whole applications of the Stratio Data Centric Suite. It beyonds to the layout family of components.',
         haveModel: true,
         apiSection: {
            inputs: [
               { paramName: 'rightsText', type: TYPES.STR, required: true, details: 'The text that appears at the beginning of the toolbar to show the rights and copyright declarations.' },
               { paramName: 'links', type: TYPES.ARRAY_OBJ, required: false, details: 'An array of StFooterLink objects (see below) that defines the links that will appear in the toolbar.' },
               { paramName: 'qaTag', type: TYPES.STR, required: true, details: 'Id for qa search in automated test' }
            ],
            outputs: []
         },
         exampleDesc: ``
      };
   }



}
