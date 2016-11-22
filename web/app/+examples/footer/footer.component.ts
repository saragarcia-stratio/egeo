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
         description: 'Stratio footer component',
         haveModel: true,
         apiSection: {
            inputs: [
               { paramName: 'rightsText', type: TYPES.STR, required: true, details: 'Text of rights' },
               { paramName: 'links', type: TYPES.ARRAY_OBJ, required: false, details: 'Array of StFooterLink' },
               { paramName: 'qaTag', type: TYPES.STR, required: true, details: 'Id for qa search in automated test' }
            ],
            outputs: []
         },
         exampleDesc: ``
      };
   }



}
