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
import { StSidebarComponent } from './st-sidebar.component';
import { StSidebarItemListComponent } from './st-sidebar-item-list/st-sidebar-item-list.component';

describe('StSidebar', () => {

   let component: StSidebarComponent;
   let fixture: ComponentFixture<StSidebarComponent>;
   let itemList: HTMLLIElement[];

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [],
         declarations: [StSidebarComponent, StSidebarItemListComponent]
      })
      // remove this block when the issue #12313 of Angular is fixed
         .overrideComponent(StSidebarComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .overrideComponent(StSidebarItemListComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .compileComponents();  // compile template and css

   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StSidebarComponent);
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

   it('st-sidebar class is added to the host tag', () => {
      let hostTag: HTMLButtonElement = fixture.nativeElement;

      expect(hostTag.classList).toContain('st-sidebar');
   });

   it('by default, first item is active if the active item is not introduced', () => {
      expect(itemList[0].classList).toContain('item--active');
   });

   it('if active item is updated from outside, it has to be updated as active', () => {
      // by default, first item is active
      expect(itemList[0].classList).toContain('item--active');

      // active is changed from outside
      component.active = component.items[4].id;
      fixture.detectChanges();

      expect(itemList[4].classList).toContain('item--active');
      expect(itemList[0].classList).not.toContain('item--active');

   });

   describe('When user clicks on a tab', () => {

      describe('and it does not have children', () => {

         it('event is emitted if it was not already activated', () => {
            spyOn(component.change, 'emit');
            (<HTMLSpanElement> itemList[2].querySelector('.item__label')).click();

            expect(component.change.emit).toHaveBeenCalledWith(component.items[2].id);

            (<jasmine.Spy> component.change.emit).calls.reset();
            component.active = component.items[2].id;

            (<HTMLSpanElement> itemList[2].querySelector('.item__label')).click();

            fixture.detectChanges();
            expect(component.change.emit).not.toHaveBeenCalled();

            (<HTMLSpanElement> itemList[3].querySelector('.item__label')).click();

            fixture.detectChanges();
            fixture.changeDetectorRef.markForCheck();

            expect(component.change.emit).toHaveBeenCalledWith(component.items[3].id);
         });

         it('this tab is displayed as active one', () => {
            component.active = component.items[2].id;
            fixture.detectChanges();

            expect(itemList[2].classList).toContain('item--active');
         });
      });

      describe('and it has children', () => {
         it('if it is collapsed, these children are displayed', () => {
            let itemWithChildren = itemList[5];

            expect(itemWithChildren.querySelectorAll('ul').length).toBe(0);

            (<HTMLSpanElement> itemWithChildren.querySelector('.item__label')).click();

            fixture.detectChanges();

            expect(itemWithChildren.classList).not.toContain('item--active');
            let childrenElements = itemWithChildren.querySelectorAll('li');

            fixture.detectChanges();

            expect(childrenElements.length).toBe(component.items[5].items.length);
         });

         it('but it is expanded, these children are hidden', () => {
            let itemWithChildren = itemList[5];

            expect(itemWithChildren.querySelectorAll('ul').length).toBe(0);

            (<HTMLSpanElement> itemWithChildren.querySelector('.item__label')).click();

            fixture.detectChanges();
            expect(itemWithChildren.classList).toContain('item--expanded');

            (<HTMLSpanElement> itemWithChildren.querySelector('.item__label')).click();

            fixture.detectChanges();

            let childrenElements = itemWithChildren.querySelectorAll('li');
            expect(childrenElements.length).toBe(0);
            expect(itemWithChildren.classList).not.toContain('item--expanded');
         });

         it('if user clicks on a child after clicking on its parent, it is displayed as active ' +
            'and class "item-list--has-active" is added to its parent', () => {
            const itemWithChildren = itemList[5];
            (<HTMLSpanElement> itemWithChildren.querySelector('.item__label')).click();
            fixture.detectChanges();
            const childrenElements = itemWithChildren.querySelectorAll('li');

            component.active = component.items[5].items[0].id; // active the first child
            fixture.detectChanges();

            expect(childrenElements[0].classList).toContain('item--active');
            expect(itemWithChildren.classList).toContain('item--has-active');
         });
      });
   });

   it('It should be able to add any class to an specific item', () => {
      component.items[2].class = 'warning';
      fixture.detectChanges();

      expect(itemList[2].classList).toContain('warning');
   });
});
