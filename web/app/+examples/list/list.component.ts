import { Component } from '@angular/core';
import { usersListExample } from './data-user';
import { User, DEFAULT_USER_METADATA } from './models/user.model';
import { FieldsMetadata, Order, ORDER_TYPE, Page, DataList } from '../../../../components/st-table';
import {UserModel} from './models/user.model';
import * as _ from 'lodash';

@Component({
   selector: 'list-example',
   templateUrl: './list.component.html',
   styleUrls: ['./list.component.scss']
})

export class ListComponent {
   users: DataList<UserModel>;
   usersToShow: DataList<UserModel>;
   fieldsMetaData: Array<FieldsMetadata>;
   order: Order;
   hasDetail: boolean;
   pagination: Page;
   elementsPerPage: number = 10;
   actionClass: string = 'onHover st-action-red';
   totalElements: number = usersListExample.length;

   constructor() {
      this.users = new DataList(usersListExample.map((user) => { return new User(user); }));
      this.fieldsMetaData = DEFAULT_USER_METADATA;
      this.order = new Order('id', ORDER_TYPE.ASC);
      this.hasDetail = true;
      this.pagination = new Page(1, this.elementsPerPage, 10);
      this.refreshElementToShow();
   }

   onChangePage(pageNumber: number): void {
      this.pagination.currentPage = pageNumber;
      this.pagination = _.clone(this.pagination);
      this.refreshElementToShow('paginate');
   }

   onOrderChange(order: Order): void {
      this.order = order;
      this.refreshElementToShow('order');
   }

   openDetail(id: string): void {
      console.log(id);
   }

    private refreshElementToShow(action: string = 'order'): void {
      if (action === 'paginate') {
         this.usersToShow = this.users.paginateDataList(this.pagination);
      } else if (action === 'order') {
         this.usersToShow = this.users.orderDataList(this.order)
            .paginateDataList(this.pagination);
      }
   }
}

