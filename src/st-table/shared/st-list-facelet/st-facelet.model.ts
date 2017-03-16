export interface FaceletCriteria {
  id: string;
  label: string;
  filter: Filter;
}

export interface FaceletBlock {
  id: string;
  label: string;
  criteria: FaceletCriteria[];
}

export class Filter {
  constructor(
    public filterBy: string,
    public filterValue: string,
    public operator: FILTER_OPERATOR
  ) { }
}

export enum FILTER_OPERATOR { GT, GE, LT, LE, EQ, NE, EMPTY_LIST, NOT_EMPTY_LIST };


// INTERNAL USE

export const internalAllId = 'all_selected_filter';

export class InternalFilter {

  static compareFilters(a: Filter, b: Filter): boolean {
    return a !== undefined && b !== undefined &&
      a.filterBy === b.filterBy &&
      a.filterValue === b.filterValue &&
      a.operator === b.operator;
  }

  constructor(
    public filter: Filter,
    public group: string,
    public priority: number
  ) { }


}

export class InternalBlock implements FaceletBlock {
  constructor(
    public id: string,
    public label: string,
    public criteria: InternalCriteria[],
    public selected: string
  ) { }
}

export class InternalCriteria implements FaceletCriteria {
  constructor(
    public id: string,
    public label: string,
    public filter: Filter
  ) { }
}
