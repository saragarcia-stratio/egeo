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
import {
   ChangeDetectionStrategy,
   Component,
   Input,
   EventEmitter,
   Output,
   OnInit, ChangeDetectorRef
} from '@angular/core';
import { StSidebarItem } from '../st-sidebar-item.interface';

/**
 * @description {Component} [SidebarItemList]
 *
 * The sidebar item list component has been designed to display a list of items in a sidebar.
 *
 *  @model
 *
 *   [Sidebar items] {../st-sidebar-item.interface.ts#StSidebarItem}
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-sidebar-item-list [items]="items" (change)="onChange($event)" [active]="active" [deep]="deep">
 * </st-sidebar-item-list>
 * ```
 *
 */
@Component({
   selector: 'st-sidebar-item-list',
   templateUrl: './st-sidebar-item-list.component.html',
   styleUrls: ['./st-sidebar-item-list.component.scss'],
   providers: [],
   host: { class: 'st-sidebar-item-list' },
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StSidebarItemListComponent implements OnInit {
   /** @Input {StSidebarItem[]} [items=''] List of items displayed on the menu */
   @Input() items: StSidebarItem[] = [];
   /** @Input {number} [deep=0] Deep of the item list in the sidebar */
   @Input() deep: number = 0;
   /** @Output {StSidebarItem} [change=''] Event emitted when the active item is changed. This emit the active item */
   @Output() change: EventEmitter<StSidebarItem> = new EventEmitter<StSidebarItem>();

   public expanded: boolean[] = [];

   private _active: StSidebarItem;

   /** @Input {string} [active=''] The id of the current active item */
   @Input() get active(): StSidebarItem {
      return this._active;
   }

   ngOnInit(): void {
      if (!this._active && this.items && this.items.length) {
         this._active = this.items[0];
      }

      this._updateStatus();
   }

   set active(active: StSidebarItem) {
      if (!this.isActive(active) ) {
         this._active = active;
         this._updateStatus();
      }
   }

   getItemClasses(item: StSidebarItem, index: number): any {
      let classes: any = {};
      classes[item.class] = item.class;
      classes['item--complex'] = item.items && item.items.length;
      classes['item--active'] = this.isActive(item);
      classes['item--expanded'] = this.expanded[index];
      classes['item--has-active'] = this.hasActiveChild(item);

      return classes;
   }

   onSelectItem(item: StSidebarItem, position: number): void {
      if (item.items && item.items.length) {
         this.expanded[position] = !this.expanded[position];
      } else {
         if (!this._active || this._active.id !== item.id ) {
            this.change.emit(item);
         }
      }
   }

   hasActiveChild(item: StSidebarItem): boolean {
      let found = false;
      let i = 0;
      if (item.items && item.items.length) {
         while (!found && i < item.items.length) {
            if (this.isActive(item.items[i])) {
               found = true;
            }
            ++i;
         }
         if (!found && item.items && item.items.length) {
            return this._hasActiveChildInChildren(item.items);
         }
      }
      return found;
   }

   onChange(item: StSidebarItem): void {
      if (!this.isActive(item) ) {
         this.change.emit(item);
      }
   }

   private isActive(item: StSidebarItem): boolean {
      return item && this._active && this._active.id === item.id;
   }

   private _updateStatus(): void {
      this.items.forEach((item, i) => {
         if ( this.hasActiveChild(item)) {
            this.expanded[i] = true;
         }
      });
   }

   private _hasActiveChildInChildren(items: StSidebarItem[]): boolean {
      let found = false;
      let i = 0;
      while (!found && i < items.length) {
         if (this.hasActiveChild(items[i])) {
            found = true;
         }
         ++i;
      }

      return found;
   }

}
