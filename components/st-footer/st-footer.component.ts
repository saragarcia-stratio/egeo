import { Component, Input } from '@angular/core';
import { StFooterLink } from './shared/';

@Component({
  selector: 'st-footer',
  styles: [require('./st-footer.component.scss')],
  template: require('./st-footer.component.html')
})
export class StFooterComponent {

  @Input() rightsText: string;
  @Input() links: Array<StFooterLink>;
  @Input() qaTag: string;

  constructor() { }

  goToExternalURL(url: string): void {
    window.open(url, '_blank');
  }

}
