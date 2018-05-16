/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */
import { Component } from '@angular/core';
import { StSidebarItem } from '@stratio/egeo';

@Component({
   selector: 'st-sidebar-demo',
   templateUrl: './st-sidebar-demo.component.html',
   styleUrls: ['./st-sidebar-demo.component.scss']
})

export class StSidebarDemoComponent {
   public items: StSidebarItem[] = [
      { id: 'vault-roles', label: 'Vault Roles' },
      { id: 'identities', label: 'Identities', class: 'warning' },
      {
         id: 'masters',
         label: 'Masters',
         items: [{
            id: 'sub-item1',
            label: 'Subitem 1',
            items: [
               { id: 'sub-item1.1', label: 'Subitem 1.1' },
               { id: 'sub-item1.2', label: 'Subitem 1.2' }]
         }, { id: 'sub-item2', label: 'Subitem 2' }]
      },
      { id: 'agents', label: 'Agents' },
      { id: 'roles', label: 'Roles' }
   ];

   public activeItem: string;

   onChangeActive(item: string) {
      this.activeItem = item;
   }
}
