/*
 * Copyright (C) 2016 Stratio (http://stratio.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'st-pagination-demo',
   templateUrl: './st-pagination-demo.component.html',
   styleUrls: ['./st-pagination-demo.component.scss']
})
export class StPaginationDemoComponent implements OnInit {

   public page: number = 1;
   public perPage: number = 20;
   public title: string = 'pagination';
   public items: Array<any> = [];
   public items2: Array<any> = [];

   constructor(
   ) { }

   ngOnInit(): void {
      this.items = this.generateItems(100);
      this.items2 = this.generateItems(50);

   }

   generateItems(n: number): Array<any> {
      const items: Array<any> = [];

      for (let i = 1; i <= n; i++) {
         items.push({
            label: 'Example' + i,
            value: i
         });
      }

      return items;
   }

   onChangePage($event: any): void {
      this.perPage = $event.perPage;
      this.page = $event.currentPage;
   }

}
