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
      description: 'Info box component is used to content any kind of information like graphs, summary lists or texts',
      haveModel: false,
      apiSection: {
         inputs: [
            { paramName: 'icon', type: TYPES.STR, required: false, details: 'Class of the header icon. If it is empty, no icon will be shown' },
            { paramName: 'title', type: TYPES.STR, required: true, details: 'Header title' }
         ],
         outputs: []
      },
      exampleDesc: `Next, you can see some examples of info boxes.`
   };

   constructor() {
   }

}
