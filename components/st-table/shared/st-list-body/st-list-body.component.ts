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
   @Output() clickAction: EventEmitter<string> = new EventEmitter<string>();

   @Input() hasDetail: boolean = true;
   @Input() detailText: string = '';
   @Input() actionClass: string = '';
   @Input() emptyListMessage: string = '';


   constructor() { }

   showDetail(id: string): void {
      this.openDetail.emit(id);
   }

   clickOnAction(id: string): void {
      this.clickAction.emit(id);
   }
}
