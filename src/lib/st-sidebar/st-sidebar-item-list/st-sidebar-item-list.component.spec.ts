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
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectionStrategy } from '@angular/core';

import { StSidebarItemListComponent } from './st-sidebar-item-list.component';

describe('StSidebarItemList', () => {

   let component: StSidebarItemListComponent;
   let fixture: ComponentFixture<StSidebarItemListComponent>;
   let itemList: HTMLLIElement[];

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [],
         declarations: [StSidebarItemListComponent]
      })
      // remove this block when the issue #12313 of Angular is fixed
         .overrideComponent(StSidebarItemListComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .compileComponents();  // compile template and css

   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StSidebarItemListComponent);
      component = fixture.componentInstance;
      component.items = [
         { id: 'vault-roles', label: 'Vault Roles' },
         { id: 'identities', label: 'Identities' },
         { id: 'masters', label: 'Masters' },
         { id: 'agents', label: 'Agents' },
         { id: 'roles', label: 'Roles' },
         {
            id: 'complex', label: 'Complex', items: [
            { id: 'child-1', label: 'Child 1' },
            { id: 'child-2', label: 'Child 2' },
            { id: 'child-3', label: 'Child 3' }
         ]
         }
      ];

      fixture.detectChanges();
      itemList = fixture.nativeElement.querySelectorAll('li');
   });

   it ('When it receives a change from a child of the active and it is different to the current active, it is emitted to its parent', () => {
      spyOn(component.change, 'emit');
      component.active = component.items[1].id;
      component.onChange(component.active);

      expect(component.change.emit).not.toHaveBeenCalled();

      component.onChange(component.items[2].id);

      expect(component.change.emit).toHaveBeenCalledWith(component.items[2].id);
   });


});
