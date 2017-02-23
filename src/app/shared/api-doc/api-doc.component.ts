import { Component, Input } from '@angular/core';
import { ApiDoc } from './shared';

@Component({
  selector: 'st-api-doc',
  templateUrl: 'api-doc.component.html',
  styleUrls: ['api-doc.component.scss']
})
export class ApiDocComponent {
   @Input() doc: ApiDoc;

   hasParameters(): boolean {
      return (this.doc.apiSection.inputs && this.doc.apiSection.inputs.length > 0) ||
      (this.doc.apiSection.outputs && this.doc.apiSection.outputs.length > 0) ||
      (this.doc.apiSection.description && this.doc.apiSection.description.trim().length > 0);
   }
}
