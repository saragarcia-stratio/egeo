import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'spinner-example',
  template: require('./spinner.component.html'),
  styles: [require('./spinner.component.scss')],
  encapsulation: ViewEncapsulation.None
})

export class SpinnerComponent {

  private loading: boolean;
  constructor() {
    this.loading = true;
  }

  changeLoading(): void {
    this.loading = !this.loading;
  }
}
