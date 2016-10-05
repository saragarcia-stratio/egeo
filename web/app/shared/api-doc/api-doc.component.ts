import { Component, Input } from '@angular/core';
import { ApiDoc } from './shared';

@Component({
  selector: 'st-api-doc',
  template: require('./api-doc.component.html'),
  styles: [require('./api-doc.component.scss')]
})
export class ApiDocComponent {
   @Input() doc: ApiDoc;
}
