import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { DataList, FieldsMetadata } from '../st-list.model';

@Component({
  selector: 'gosec-list-body',
  styles: [require('./st-list-body.component.scss')],
  template: require('./st-list-body.component.html'),
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GosecListBodyComponent<T> {
  @Input() headerList: Array<FieldsMetadata>;
  @Input() data: DataList<T>;
  @Output() openDetail: EventEmitter<string> = new EventEmitter<string>();
  @Input() hasDetail: boolean = true;

  constructor() { }

  showDetail(id: string): void {
    this.openDetail.emit(id);
  }
}
