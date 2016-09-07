import { Component, Input} from '@angular/core';

@Component({
  selector: 'st-info-box',
  template: require('./st-info-box.component.html'),
  styles: [require('./st-info-box.component.scss')]
})

export class StInfoBoxComponent {
  @Input() icon: string;
  @Input() title: string;

  constructor() {
  }

}
