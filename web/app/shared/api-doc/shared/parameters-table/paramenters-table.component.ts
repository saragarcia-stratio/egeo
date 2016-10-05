import { Component, Input } from '@angular/core';
import { ApiRow, TYPES } from './../api-doc.model';


@Component({
  selector: 'st-parameters-table',
  template: require('./paramenters-table.component.html'),
  styles: [require('./paramenters-table.component.scss')]
})
export class ParametersTableComponent {
   @Input() title: string;
   @Input() data: Array<ApiRow>;

   getRequired(value: boolean): string {
      return value ? 'icon-check' : '';
   }

   getType(value: TYPES): string {
      switch (value) {
         case TYPES.OBJ:
            return 'Object';
         case TYPES.NUM:
            return 'Number';
         case TYPES.STR:
            return 'String';
         default:
            return 'String';
      }
   }
}
