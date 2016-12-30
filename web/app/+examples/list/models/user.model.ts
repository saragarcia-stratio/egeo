import { FieldsMetadata, Model, Order, ORDER_TYPE } from '../../../../../components/st-table';
import * as _ from 'lodash';

const userMetadata: Array<FieldsMetadata> = [{
   id: 'name',
   label: 'Name',
   type: 'text',
   link: false
},
   {
      id: 'id',
      label: 'Id',
      type: 'text',
      link: false
   },
   {
      id: 'email',
      label: 'Email',
      type: 'text',
      link: false
   },
   {
      id: 'custom',
      label: 'Type',
      type: 'icotext',
      iconRel: { 'SYSTEM': { iconName: 'icon-layers' }, 'CUSTOM': { iconName: 'icon-server' } },
      link: false
   },
   {
      id: 'health',
      label: 'health',
      type: 'boolean',
      booleanRel: {
         trueField: {
            trueText: 'Healthy',
            cssClass: 'true-class'
         },
         falseText: 'UnHealthy'
      },
      link: false
   }
];

export interface UserModel {
   id: number;
   name: string;
   email: string;
   custom: boolean;
   ngroups: number;
   npolicies: number;
   health: number;
}


export class User extends Model<UserModel> {

   constructor(data: UserModel) {
      super(data);
   };

   getValue(key: string): string {
      switch (key) {
         case 'id': return this.toString(this.data.id);
         case 'name': return this.toString(this.data.name);
         case 'email': return this.toString(this.data.email);
         case 'custom': return this.data.custom ? 'CUSTOM' : 'SYSTEM';
         case 'health': return this.toString(this.data.health);
         default: return '';
      }
   }

   compare(b: Model<UserModel>, order: Order): number {
      let comparation: number;
      switch (order.orderBy) {
         case 'id': comparation = this.compareNumbersAndString(this.data.id, b.data.id); break;
         case 'name': comparation = this.compareNumbersAndString(this.data.name, b.data.name); break;
         case 'email': comparation = this.compareNumbersAndString(this.data.email, b.data.email); break;
         case 'custom': comparation = this.compareNumbersAndString(this.toString(this.data.custom), this.toString(b.data.custom)); break;
         case 'health': comparation = this.compareNumbersAndString(this.toString(this.data.health), this.toString(b.data.health)); break;
         default: comparation = 0;
      }
      return order.type === ORDER_TYPE.ASC ? comparation : (comparation * -1);
   }

   clone(): User {
      return new User(_.clone(this.data));
   }

   createModel(data: UserModel): User {
      return new User(data);
   }

   private compareNumbersAndString(a: string | number, b: string | number): number {
      a = typeof a === 'string' ? a.toUpperCase() : a;
      b = typeof b === 'string' ? b.toUpperCase() : b;

      if (a < b) {
         return -1;
      } else if (a > b) {
         return 1;
      } else {
         return 0;
      }
   }

   private toString(value: any): string {
      if (value !== undefined) {
         return value.toString();
      } else {
         return '';
      }
   }
}

export const DEFAULT_USER_METADATA: Array<FieldsMetadata> = userMetadata;
