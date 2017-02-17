import { Component, OnInit } from '@angular/core';
import { ApiDoc, TYPES } from '../../shared';


@Component({
   selector: 'pagination-example',
   templateUrl: 'pagination.component.html',
   styleUrls: ['pagination.component.scss']
})
export class PaginationComponent implements OnInit {

   public page: number = 1;
   public perPage: number = 20;
   public apiDoc: ApiDoc;
   private title: string = 'pagination';
   private items: Array<any> = [];
   private items2: Array<any> = [];

   constructor(
   ) { }

   ngOnInit(): void {

      this.apiDoc = {
         title: 'Pagination',
         description: 'Paging component for use in tables and lists.',
         haveModel: false,
         apiSection: {
            inputs: [
            ],
            outputs: [
            ]
         },
         exampleDesc: ``
      };

      this.items = this.generateItems(100);
      this.items2 = this.generateItems(50);

   }

   generateItems(n: number): Array<any> {
      let items = [];

      for (let i = 1; i <= n; i++) {
         items.push({
            label: 'Example' + i,
            value: i
         });
      }

      return items;
   }

   onChangePage($event: any): void {;
      this.perPage = $event.perPage;
      this.page = $event.currentPage;
   }

}
