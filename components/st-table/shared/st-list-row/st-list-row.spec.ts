import {GosecListRowComponent} from './';
import { Model } from '../';
import { FieldsMetadata, ORDER_TYPE, DataList, Order, GosecListHeaderComponent, GosecListBodyComponent} from '../';
import * as _ from 'lodash';

class Hero extends Model<HeroeInterface> {

   constructor(data: HeroeInterface) {
      super(data);
   };

   getValue(key: string): string {
      return this.toString(this.data[key]);
   }

   createModel(data: HeroeInterface): Model<HeroeInterface> {
      return new Hero(data);
   }

   compare(b: Model<HeroeInterface>, order: Order): number {
      let comparation: number;
      comparation = this.compareNumbersAndString(this.data[order.orderBy], b.data[order.orderBy]);
      return order.type === ORDER_TYPE.ASC ? comparation : (comparation * -1);
   }

   clone(): Hero {
      return new Hero(_.clone(this.data));
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
} // end class Hero

interface HeroeInterface {
   name: string;
   city: string;
   age: number;
   magician: number;
   alive: boolean;
   [key: string]: any;
}

let heroes = [
   { name: 'Caramon Majere', 'city': 'Solamnia', age: 22, 'magician': 0, 'alive': false },
   { name: 'Raistlin Majere', 'city': 'Istar', age: 984, 'magician': 1, 'alive': true },
   { name: 'Alhana Starbreeze', 'city': 'Qualinesti', age: 18, 'magician': 0, 'alive': false },
   { name: 'Dalamar', 'city': 'Icereach', age: 30, 'magician': 0, 'alive': true },
   { name: 'Riverwind', 'city': 'Ergoth', age: 22, 'magician': 0, 'alive': true }
];

let heroesMetadata = [
   { id: 'name', label: 'Name', type: 'text', link: false },
   {
      id: 'city',
      label: 'City',
      type: 'text',
      link: false
   },
   { id: 'name', label: 'Name', type: 'number', link: true },
   {
      id: 'magician',
      label: 'Magician',
      type: 'boolean',
      booleanRel: {
         trueField: {
            trueText: 'Yes!',
            cssClass: 'true-class'
         },
         falseText: 'Nope'
      },
      link: false
   },
   {
      id: 'alive',
      label: 'AlIve',
      type: 'boolean',
      booleanRel: {
         trueText: 'Yep',
         falseField: {
            falseText: 'nein',
            cssClass: 'false-class'
         }
      },
      link: false
   }
];

let heroesDatalist = heroes.map((hero) => new Hero(hero));
let componentRow: GosecListRowComponent;

describe(('st-list-row'), () => {

   beforeEach(() => {
      componentRow = new GosecListRowComponent();
      componentRow.metadata = heroesMetadata;
   });

   it('should has a detailText', () => {
      componentRow.rowData = heroesDatalist[1];
      expect(componentRow.detailText).toBeDefined();

   });

   it('should get positive text for boolean values', () => {
      componentRow.rowData = heroesDatalist[1];
      let text = componentRow.getBooleanText(heroesMetadata[3]);
      expect(text).toEqual('Yes!');
   });

   it('should get positive text for numbers values', () => {
      componentRow.rowData = heroesDatalist[1];
      let text = componentRow.getBooleanText(heroesMetadata[4]);
      expect(text).toEqual('Yep');
   });

   it('should get negative text for boolean values', () => {
      componentRow.rowData = heroesDatalist[0];
      let text = componentRow.getBooleanText(heroesMetadata[3]);
      expect(text).toEqual('Nope');
   });

   it('should get negative text for numbers values', () => {
      componentRow.rowData = heroesDatalist[0];
      let text = componentRow.getBooleanText(heroesMetadata[4]);
      expect(text).toEqual('nein');
   });

   it('should get the css class for true cases', () => {
      componentRow.rowData = heroesDatalist[1];
      let cssCass = componentRow.getBooleanClass(heroesMetadata[3]);
      expect(cssCass).toEqual('true-class');
   });

   it('should get the boolean css class for false cases', () => {
      componentRow.rowData = heroesDatalist[0];
      let cssCass = componentRow.getBooleanClass(heroesMetadata[3]);
      expect(cssCass).toEqual('st-table-negative-cell');
   });

   it('should emit openDetail event', (done) => {
      componentRow.rowData = heroesDatalist[0];
      componentRow.openDetail.subscribe((eventData: string) => {
         expect(eventData).toEqual('myId');
         done();
      });
      componentRow.showDetail('myId');
   });

   it('should emit clickAction event', (done) => {
      componentRow.rowData = heroesDatalist[0];
      componentRow.clickAction.subscribe((eventData: string) => {
         expect(eventData).toEqual('myId');
         done();
      });
      componentRow.clickOnAction('myId');
   });
});



