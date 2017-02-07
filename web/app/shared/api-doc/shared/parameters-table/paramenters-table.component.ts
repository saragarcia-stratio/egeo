import { Component, Input } from '@angular/core';
import { ApiRow, TYPES } from './../api-doc.model';


@Component({
   selector: 'st-parameters-table',
   templateUrl: './paramenters-table.component.html',
   styleUrls: ['./paramenters-table.component.scss']
})
export class ParametersTableComponent {
   @Input() title: string;
   @Input() data: Array<ApiRow>;

   getRequired(value: boolean): string {
      return value ? 'icon-check' : '';
   }

   getType(value: TYPES | string): string {
      if (typeof value !== 'string') {
         switch (value) {
            case TYPES.OBJ:
               return 'Object';
            case TYPES.NUM:
               return 'number';
            case TYPES.STR:
               return 'string';
            case TYPES.BOOL:
               return 'boolean';
            case TYPES.ANY:
               return 'any';
            case TYPES.ARRAY_NUM:
               return 'Array<number>';
            case TYPES.ARRAY_STR:
               return 'Array<string>';
            case TYPES.ARRAY_OBJ:
               return 'Array<Object>';
            case TYPES.ARRAY_BOOL:
               return 'Array<boolean>';
            case TYPES.ARRAY_ANY:
               return 'Array<any>';
            case TYPES.FUNC:
               return 'Function';
            default:
               return 'String';
         }
      } else {
         return value;
      }
   }
}
