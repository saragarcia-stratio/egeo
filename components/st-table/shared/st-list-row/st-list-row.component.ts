import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FieldsMetadata, Model } from '../st-list.model';
import { getColPercent } from '../utils';

@Component({
  selector: 'gosec-list-row',
  styles: [require('./st-list-row.component.scss')],
  template: require('./st-list-row.component.html'),
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GosecListRowComponent<T> {
  @Input() rowData: Model<T>;
  @Input() metadata: Array<FieldsMetadata>;
  @Output() openDetail: EventEmitter<string> = new EventEmitter<string>();
  @Input() hasDetail: boolean = true;

  RIGHT_MARGIN: number = 5;
  rowLength: number = 100;
  constructor() {
    this.rowLength = 100 - this.RIGHT_MARGIN;
  }

  getColPercentage(type: string): string {
    return getColPercent(type, this.rowLength, this.metadata);
  }

  getIcon(field: FieldsMetadata): string {
    return field.iconRel[this.rowData.getValue(field.id)].iconName;
  }

  getColor(field: FieldsMetadata): Object {
    return {color: field.iconRel[this.rowData.getValue(field.id)].color};
  }

  showDetail(id: string): void {
    this.openDetail.emit(id);
  }
}
