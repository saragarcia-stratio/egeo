import { Component } from '@angular/core';
import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'api-doc-example',
   templateUrl: './api-doc-example.component.html',
   styleUrls: ['./api-doc-example.component.scss']
})

export class ApiDocExample {

   public apiDoc: ApiDoc = {
      title: 'How to document with ApiDoc',
      description: 'Using the ApiDoc documentation system you can document your Egeo components, services or whatever with ease.',
      haveModel: true, // True: show model section, False: hide model section
      apiSection: {
         description: '(Optional) This table gives you a quick overview of the SLDS CSS classes that can be applied to create buttons.',
         inputs: [
            { paramName: 'Param 1', type: TYPES.OBJ, required: true, details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' },
            { paramName: 'Param 2', type: TYPES.NUM, required: false, details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' },
            { paramName: 'Param 3', type: TYPES.STR, required: false, details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' },
            { paramName: 'Param 4', type: 'Array<ApiDoc>', required: true, details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' }
         ],
         outputs: [
            { paramName: 'Param 1', type: TYPES.OBJ, required: true, details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' },
            { paramName: 'Param 2', type: 'ApiDoc', required: false, details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' }
         ]
      },
      exampleDesc: `The base .slds-button looks like a plain text link. It removes all the styling of the native button. It’s typically used to trigger a modal or display a “like” link. All button variations are built by adding another class to .slds-button. Add the .slds-button--neutral class to create a neutral button, which has a white background and gray border.

      Use a neutral icon button is for buttons with an icon on the left or right (not for stateful buttons). Add the .slds-button--neutral class to .slds-button.`
   };
}
