import {Component, ViewEncapsulation} from '@angular/core';
import { ApiDoc, TYPES } from '../../shared';

@Component({
  selector: 'spinner-example',
  templateUrl: './spinner.component.html',
  styleUrls: ['spinner.component.scss']
})

export class SpinnerComponent {

  public loading: boolean;

 public apiDoc: ApiDoc = {
      title: 'Spinner',
      description: 'The spinner is the animated graphic used to be shown during loading processes.',
      haveModel: false,
      apiSection: {
         inputs: [],
         outputs: []
      },
      exampleDesc: ''
   };

  constructor() {
    this.loading = true;
     this.apiDoc = {
        title: 'Spinner',
        description: 'Spinner component is displayed when content is pending to be loaded.',
        haveModel: true,
        apiSection: {
           inputs: [
              { paramName: 'imageUrl', type: TYPES.STR, required: true, details: 'Url of image that will be displayed until content is being loaded' }
           ],
           outputs: []
        },
        exampleDesc: `Next, we can see an example of spinner that is displayed when loading variable is true`
     };
  }

  changeLoading(): void {
    this.loading = !this.loading;
  }
}
