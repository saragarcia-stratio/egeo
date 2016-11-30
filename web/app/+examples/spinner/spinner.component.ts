import {Component, ViewEncapsulation} from '@angular/core';
import { ApiDoc } from '../../shared';

@Component({
  selector: 'spinner-example',
  template: require('./spinner.component.html'),
  styles: [require('./spinner.component.scss')]
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
  }

  changeLoading(): void {
    this.loading = !this.loading;
  }
}
