export interface SearchElement {
  id: string;
  label: string;
}

export class Search {
  constructor(public searchBy: string, public searchText: string) {}
}
