import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'info-box-example',
  template: require('./info-box.component.html'),
  styles: [require('./info-box.component.scss')],
  encapsulation: ViewEncapsulation.None
})

export class InfoBoxComponent {
  constructor () {
  }
  
}
