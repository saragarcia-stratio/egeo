import { Search } from './st-search';
import { Page } from './st-pagination';
import { Filter, FILTER_OPERATOR } from './st-list-facelet';

export enum ORDER_TYPE { ASC, DESC };

export class Order {
   constructor(
      public orderBy: string,
      public type: ORDER_TYPE
   ) { }
}

export interface FieldsMetadata {
   id: string;
   label: string;
   type: string; // text | icotext | boolean
   link: boolean;
   iconRel?: iconRelation;
   showText?: boolean;
   booleanRel?: booleanRelation;
}

export type iconRelation = {
   [name: string]: {
      iconName: string;
      color?: string;
   }
};

export type booleanRelation = {
   trueText?: string,
   trueField?: {
      trueText: string,
      cssClass?: string,
      iconName?: string
   },
   falseText?: string,
   falseField?: {
      falseText: string,
      cssClass?: string,
      iconName?: string
   }
};

export class DataList<T> {
   constructor(public data: Array<Model<T>>) { }

   getRow(row: number): Model<T> {
      return this.data[row];
   }

   get length(): number {
      return this.data.length;
   }

   orderDataList(order: Order): DataList<T> {
      let orderedList: Model<T>[] = this.data.sort((a: Model<T>, b: Model<T>): number => a.compare(b, order));
      return new DataList<T>(orderedList);
   }

   searchDataList(search: Search): DataList<T> {
      let searchText: string = search.searchText.toLowerCase();
      let searchList: Model<T>[] = this.data.filter((element: Model<T>) => element.getValue(search.searchBy).toLowerCase().search(searchText) >= 0);
      return new DataList<T>(searchList);
   }

   paginateDataList(pagination: Page): DataList<T> {
      let currentPage: number = pagination.currentPage;
      let elementsPerPage: number = pagination.elementsPerPage;
      let initial: number = (currentPage - 1) * elementsPerPage;
      let final: number = initial + elementsPerPage;
      let paginatedList: Model<T>[] = this.data.slice(initial, final);
      return new DataList<T>(paginatedList);
   }

   filterData(filters: Filter[]): DataList<T> {
      let data: Array<Model<T>> = this.data;
      for (let i = 0; i < filters.length; i++) {
         data = data.filter((element: Model<T>) => element.checkFilter(filters[i]));
      }
      return new DataList<T>(data);
   }
}

export abstract class Model<T> {
   constructor(public data: T) { }

   abstract getValue(field: string): string;

   abstract compare(b: Model<T>, order: Order): number;

   abstract clone(): Model<T>;

   abstract createModel(data: T): Model<T>;

   public checkFilter(filter: Filter): boolean {
      let a = this.getValue(filter.filterBy);
      let value = this.parseToNumberOrString(a);
      let b = filter.filterValue;
      let comparator = this.parseToNumberOrString(b);
      let typeValue = typeof value;
      let typeComparator = typeof comparator;
      if (typeValue === typeComparator || typeComparator === 'undefined') {
         switch (filter.operator) {
            case FILTER_OPERATOR.GT: return value > comparator;
            case FILTER_OPERATOR.GE: return value >= comparator;
            case FILTER_OPERATOR.LT: return value < comparator;
            case FILTER_OPERATOR.LE: return value <= comparator;
            case FILTER_OPERATOR.NE: return value !== comparator;
            case FILTER_OPERATOR.EQ: return value === comparator;
            case FILTER_OPERATOR.EMPTY_LIST: return a.length === 0;
            case FILTER_OPERATOR.NOT_EMPTY_LIST: return a.length > 0;
            default: return false;
         }
      } else {
         return false;
      }
   }

   private parseToNumberOrString(value: string): number | string {
      let a = Number(value);
      let b = Number.isNaN(a);
      return b ? value : Number(value);
   }
}
