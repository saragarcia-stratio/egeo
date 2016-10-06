import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FieldsMetadata, DataList, Order, GosecListHeaderComponent, GosecListBodyComponent} from './shared';
import { Page } from './shared/st-pagination/';


@Component({
   selector: 'st-table',
   styles: [require('./st-list.component.scss')],
   template: require('./st-list.component.html'),
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class GosecListComponent<T> {
   // Data Fields
   @Input() metadata: Array<FieldsMetadata>;
   @Input() data: DataList<T>;
   @Output() openDetail: EventEmitter<string> = new EventEmitter<string>();
   @Output() clickAction:  EventEmitter<string> = new EventEmitter<string>();

   // Order Fields
   @Input() order: Order;
   @Output() onOrderChange: EventEmitter<Order> = new EventEmitter<Order>();

   // Configuration
   @Input() hasDetail: boolean = true;
   @Input() detailText: string = '';
   @Input() actionClass: string = '';


   // Pagination Fields
   @Input() pagination: Page;
   @Input() totalElements: number;
   @Output() changePage: EventEmitter<number> = new EventEmitter<number>();

   onChangePage(page: number): void {
      this.changePage.emit(page);
   }

   orderChange(order: Order): void {
      this.onOrderChange.emit(order);
   }

   showDetail(id: string): void {
      this.openDetail.emit(id);
   }

   clickOnAction(id: string): void {
      this.clickAction.emit(id);
   }

}
