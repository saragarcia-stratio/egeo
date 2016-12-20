import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChange } from '@angular/core';
import { FaceletBlock, FaceletCriteria, Filter, InternalBlock, InternalCriteria, InternalFilter, internalAllId } from './st-facelet.model';

@Component({
  selector: 'st-facelet',
  styles: [require('./st-facelet.component.scss')],
  template: require('./st-facelet.component.html'),
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GosecFaceletComponent implements OnChanges {

  @Input() faceletBlocks: FaceletBlock[];
  @Output() filtersChange: EventEmitter<Filter[]> = new EventEmitter<Filter[]>();

  internalFilters: Array<InternalFilter> = new Array<InternalFilter>();
  internalFacetedBlock: InternalBlock[];

  private _BLOCK_PROPERTY: string = 'faceletBlocks';

  constructor() { }

  removeFilters(): void {
    this.internalFilters = new Array<InternalFilter>();
    this.internalFacetedBlock.map((block) => block.selected = internalAllId);
    this.notifyFilters();
  }

  changeOption(criteria: FaceletCriteria, group: InternalBlock): void {
    let internalFilterPos = this.getFilterPosition(group.id);
    if (internalFilterPos >= 0) {
      let filter: Filter = this.internalFilters[internalFilterPos].filter;
      if (!InternalFilter.compareFilters(filter, criteria.filter)) {
        this.internalFilters[internalFilterPos].filter = criteria.filter;
      }
    } else {
      let priority = this.getGroupPosition(group.id);
      this.internalFilters.push(new InternalFilter(criteria.filter, group.id, priority));
      this.internalFilters.sort((a: InternalFilter, b: InternalFilter) => a.priority - b.priority);  // sort by priority
    }
    group.selected = criteria.id;
    this.notifyFilters();
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    if (changes[this._BLOCK_PROPERTY].currentValue !== changes[this._BLOCK_PROPERTY].previousValue) {
      if (this.faceletBlocks && this.faceletBlocks.length > 0) {
        this.internalFacetedBlock = this.faceletBlocks.map((block) => {
          let internalBlock: InternalBlock = this.generateInternalBlock(block); // Clone for internal use without modify external input
          internalBlock.criteria.push(new InternalCriteria(internalAllId, 'FACELET.ALL', undefined)); // Add ALL default option to all blocks
          internalBlock.selected = internalAllId;
          return internalBlock;
        });
      }
    }
  }

  private generateInternalBlock(block: FaceletBlock): InternalBlock {
    let criteria: InternalCriteria[] = block.criteria.map((cr) => this.generateInternalCriteria(cr));
    return new InternalBlock(block.id, block.label, criteria, '');
  }

  private generateInternalCriteria(criteria: FaceletCriteria): InternalCriteria {
    return new InternalCriteria(criteria.id, criteria.label, criteria.filter);
  }

  private notifyFilters(): void {
    let filters: Array<Filter> = this.internalFilters
      .filter((intFilter: InternalFilter) => intFilter.filter !== undefined)
      .map((intFilter: InternalFilter) => intFilter.filter);
    this.filtersChange.emit(filters);
  }

  private setDefaults(group: string): void {

  }

  private getGroupPosition(id: string): number {
    return this.internalFacetedBlock.findIndex((block: FaceletBlock) => block.id === id);
  }

  private getFilterPosition(group: string): number {
    return this.internalFilters.findIndex((filter: InternalFilter) => filter.group === group);
  }
}

