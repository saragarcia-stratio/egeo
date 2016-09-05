import { Component, Input, Injectable} from '@angular/core';
import { TranslatePipe } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'st-info-box',
  pipes: [TranslatePipe],
  template: require('./st-info-box.component.html'),
  styles: [require('./st-info-box.component.scss')]
})
@Injectable()
export class StInfoBoxComponent {
  @Input() icon: string;
  @Input() title: string;

  constructor() {
  }
  
}
