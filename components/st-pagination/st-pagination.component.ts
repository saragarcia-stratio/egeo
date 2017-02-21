import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { StDropDownMenuItem } from '../st-dropdown-menu';
import { Paginate, PaginateTexts } from './st-pagination.interface';

@Component({
   selector: 'st-pagination',
   templateUrl: 'st-pagination.component.html',
   styleUrls: ['st-pagination.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StPaginationComponent implements OnInit, OnChanges {

   @Input() total: number;
   @Input() perPage: number = 20;
   @Input() currentPage: number = 1;
   @Input() label: PaginateTexts;
   @Input() qaTag: string;

   @Output() change: EventEmitter<Paginate> = new EventEmitter<Paginate>();

   public disableNextButton: boolean = false;
   public disablePrevButton: boolean = true;
   public firstItem: number;
   public lastItem: number;
   public items: StDropDownMenuItem[] = [];

   constructor(
      private cd: ChangeDetectorRef
   ) {
      if (!this.label) {
         this.label = {
            display: 'Display',
            element: 'elements',
            perPage: 'per page',
            of: 'of'
         };
         this.cd.markForCheck();
      }
   }

   ngOnInit(): void {
      this.updatePages();
      this.generateItems();
      this.checkPerPage();
   }

   checkPerPage(): void {
      if (this.perPage !== 20 && this.perPage !== 50 && this.perPage !== 100) {
         throw new Error('The perPage parameter only supports numeric values 20, 50, or 100');
      };
   }

   ngOnChanges(values: any): void {
      if (values.total) {
         this.generateItems();
      }
   }

   generateItems(): void {

      this.items = [];

      this.items.push(this.generateItem(20));
      this.items.push(this.generateItem(50));

      if (this.total > 200) {
         this.items.push(this.generateItem(100));
      }

   }

   generateItem(n: number): StDropDownMenuItem {
      return ({
         label: `${this.label.display} ${n} ${this.label.element} ${this.label.perPage}`,
         value: n,
         selected: this.checkSelected(n)
      });
   }

   checkSelected(value: number): boolean {
      if (this.perPage <= value) {
         return true;
      }

      return false;
   }

   showItemsPerPage(): boolean {
      if (this.total <= 50) {
         return false;
      }

      return true;
   }

   nextPage(): void {
      this.currentPage++;
      this.updatePages();
   }

   prevPage(): void {
      this.currentPage--;
      this.updatePages();
   }

   updatePages(): void {

      this.lastItem = (this.perPage * this.currentPage);

      if (this.currentPage === 1) {
         this.firstItem = this.currentPage;
         this.disablePrevButton = true;
      } else {
         this.firstItem = this.perPage * (this.currentPage - 1) + 1;
         this.disablePrevButton = false;
      }

      if (this.lastItem >= this.total) {
         this.lastItem = this.total;
         this.disableNextButton = true;
      } else {
         this.disableNextButton = false;
      }

      this.change.emit({
         currentPage: this.currentPage,
         perPage: this.perPage
      });

   }

   onChangePerPage(item: StDropDownMenuItem): void {
      this.currentPage = 1;
      this.perPage = item.value;
      this.updatePages();
   }

}
