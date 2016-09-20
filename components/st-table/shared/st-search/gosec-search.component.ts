import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter, OnChanges } from '@angular/core';
import { SearchElement, Search } from './gosec-search.model';

@Component({
  selector: 'gosec-search',
  styles: [require('./gosec-search.component.scss')],
  template: require('./gosec-search.component.html'),
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GosecSearchComponent implements OnChanges {
  @Input() searchType: string;
  @Input() search: Search;
  @Input() searchElements: Array<SearchElement>;
  @Output() changeSearch: EventEmitter<Search> = new EventEmitter<Search>();

  constructor() { }

  changeText(text: string): void {
    this.search.searchText = text;
    this.changeSearch.emit(this.search);
  }

  changeSelect(option: string): void {
    this.search.searchBy = option;
    this.changeSearch.emit(this.search);
  }

  ngOnChanges(): void {
    if (this.searchElements && this.searchElements.length > 0 && this.search.searchBy === '') {
      this.changeSelect(this.searchElements[0].id);
    }
  }
}

