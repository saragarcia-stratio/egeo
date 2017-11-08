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
import { DebugElement, NO_ERRORS_SCHEMA, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StDropdownMenuComponent } from './st-dropdown-menu.component';
import { StPopPlacement } from '../st-pop/st-pop.model';
import { StDropdownMenuModule } from './st-dropdown-menu.module';
import { StDropDownMenuItem, StDropDownMenuGroup } from './st-dropdown-menu.interface';

const simpleItems: StDropDownMenuItem[] = [
   { label: 'example 1', value: 1 },
   { label: 'example 2', value: 2 },
   { label: 'example 3', value: 3 },
   { label: 'example 4', value: 4 },
   { label: 'example 5', value: 5 },
   { label: 'example 6', value: 6 },
   { label: 'example 7', value: 7 },
   { label: 'example 8', value: 8 },
   { label: 'example 9', value: 9 },
   { label: 'example 10', value: 10 },
   { label: 'example 11', value: 11 }
];

const simpleItems2: StDropDownMenuItem[] = [
   { label: 'test 1', value: 11 },
   { label: 'test 2', value: 12 },
   { label: 'test 3', value: 13 },
   { label: 'test 4', value: 14 },
   { label: 'test 5', value: 15 }
];

const groupedItems: StDropDownMenuGroup[] = [
   { title: 'group 1', items: simpleItems },
   { title: 'group 2', items: simpleItems2 }
];

const emptyGroup: StDropDownMenuGroup[] = [
   { title: 'group 1', items: [] },
   { title: 'group 2', items: simpleItems2 }
];

const defaultRowHeight: number = 42;

@Component({
   changeDetection: ChangeDetectionStrategy.OnPush,
   template: `
         <st-dropdown-menu #dropdown
            [items]="items"
            [active]="active"
            [selectedItem]="selected"
            id="test-id"
            (change)="onChange($event)">
            <button class="button button-primary" [style.width]="dropdownWidth">Show</button>
         </st-dropdown-menu>
      `
})
class TestDropdownComponent {
   items: StDropDownMenuItem[];
   active: boolean = false;
   selected: StDropDownMenuItem;
   @ViewChild('dropdown') dropdownItem: StDropdownMenuComponent;
   dropdownWidth: string = '300px';
   onChange(item: StDropDownMenuItem): void { this.selected = item; }
}

describe('StDropdownMenuComponent', () => {

   let comp: StDropdownMenuComponent;
   let fixture: ComponentFixture<StDropdownMenuComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [StDropdownMenuComponent],
         schemas: [NO_ERRORS_SCHEMA]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StDropdownMenuComponent);
      comp = fixture.componentInstance;
   });

   it('should init correctly', () => {
      comp.items = simpleItems;
      (fixture.elementRef.nativeElement as HTMLElement).id = null;
      fixture.detectChanges();

      const defaultMaxHeight: number = comp.itemsBeforeScroll * 42; // 42 it's default row height

      expect(comp.active).toBeFalsy();
      expect(comp.items).toEqual(simpleItems);
      expect(comp.placement).toEqual(StPopPlacement.BOTTOM_START);
      expect(comp.emptyListMessage).toEqual('');
      expect(comp.selectedItem).toBeUndefined();
      expect(comp.itemsBeforeScroll).toEqual(8);
      expect(comp.moveSelected).toBeTruthy();
      expect(comp.styleSelected).toBeTruthy();
      expect(comp.offset).toEqual({ x: 0, y: 0 });

      expect(comp.componentId).toBeNull();
      expect(comp.menuId).toBeNull();
      expect(comp.getItemId('test')).toBeNull();

      expect(comp.isItemGroup).toBeFalsy();
      expect(comp.menuMaxHeight).toEqual(`${defaultMaxHeight}px`);
   });

   it('should get max height', () => {
      comp.items = simpleItems;
      (fixture.elementRef.nativeElement as HTMLElement).id = null;
      fixture.detectChanges();

      const defaultMaxHeight: number = comp.itemsBeforeScroll * defaultRowHeight; // 42 it's default row height
      expect(comp.menuMaxHeight).toEqual(`${defaultMaxHeight}px`);

      comp.itemsBeforeScroll = undefined;
      fixture.detectChanges();
      expect(comp.menuMaxHeight).toBeNull();
   });

   it('should propagate ids', () => {
      comp.items = simpleItems;
      const id: string = 'test-id';
      (fixture.elementRef.nativeElement as HTMLElement).id = id;
      fixture.detectChanges();

      expect(comp.componentId).toEqual(id);
      expect(comp.menuId).toEqual(`${id}-menu`);
      expect(comp.getItemId('test')).toEqual(`${id}-option-test`);
   });

   it('should propagate ids to menu without label', () => {
      comp.items = simpleItems;
      const id: string = 'test-id';
      (fixture.elementRef.nativeElement as HTMLElement).id = id;
      fixture.detectChanges();

      expect(comp.componentId).toEqual(id);
      expect(comp.menuId).toEqual(`${id}-menu`);
      expect(comp.getItemId(undefined)).toBeNull();
   });

   it('should show options when active it\'s true', () => {
      comp.items = simpleItems;
      comp.active = false;
      const id: string = 'test-id';
      (fixture.elementRef.nativeElement as HTMLElement).id = id;
      fixture.detectChanges();

      let items: DebugElement[] = fixture.debugElement.queryAll(By.css('st-dropdown-menu-item'));
      expect(items).toBeDefined();
      expect(items.length).toBeDefined();
      expect(items.length).toEqual(0);

      comp.active = true;
      fixture.detectChanges();

      items = fixture.debugElement.queryAll(By.css('st-dropdown-menu-item'));
      expect(items).toBeDefined();
      expect(items.length).toBeDefined();
      expect(items.length).toEqual(comp.items.length);
   });

   it('should show empty list message', () => {
      comp.items = [];
      comp.active = false;
      comp.emptyListMessage = 'Test message';
      const id: string = 'test-id';
      (fixture.elementRef.nativeElement as HTMLElement).id = id;
      fixture.detectChanges();

      let item: DebugElement = fixture.debugElement.query(By.css('.without-results'));
      expect(item).toBeNull();

      comp.active = true;
      fixture.detectChanges();

      item = fixture.debugElement.query(By.css('.without-results'));
      expect(item).toBeDefined();
      expect(item.nativeElement).toBeDefined();
      expect((item.nativeElement as HTMLDivElement).innerText).toEqual(comp.emptyListMessage);
   });

   it('should show title of group menu', () => {
      comp.items = groupedItems;
      comp.active = false;
      fixture.detectChanges();

      let titles: DebugElement[] = fixture.debugElement.queryAll(By.css('h3'));
      expect(titles).toBeDefined();
      expect(titles.length).toBeDefined();
      expect(titles.length).toEqual(0);

      comp.active = true;
      fixture.detectChanges();

      titles = fixture.debugElement.queryAll(By.css('h3'));
      expect(titles).toBeDefined();
      expect(titles.length).toBeDefined();
      expect(titles.length).toEqual(2);
      expect((titles[0].nativeElement as HTMLElement).children[0].textContent).toEqual(groupedItems[0].title);
      expect((titles[1].nativeElement as HTMLElement).children[0].textContent).toEqual(groupedItems[1].title);
   });

   it('should show options when active it\'s true and with a group menu', () => {
      comp.items = groupedItems;
      comp.active = false;
      const id: string = 'test-id';
      (fixture.elementRef.nativeElement as HTMLElement).id = id;
      const totalItems: number = groupedItems.reduce((count, act) => count + act.items.length, 0);
      fixture.detectChanges();

      let items: DebugElement[] = fixture.debugElement.queryAll(By.css('st-dropdown-menu-item'));
      expect(items).toBeDefined();
      expect(items.length).toBeDefined();
      expect(items.length).toEqual(0);

      comp.active = true;
      fixture.detectChanges();

      items = fixture.debugElement.queryAll(By.css('st-dropdown-menu-item'));
      expect(items).toBeDefined();
      expect(items.length).toBeDefined();
      expect(items.length).toEqual(totalItems);
   });

   it('should show empty list message with a group menu', () => {
      comp.items = emptyGroup;
      comp.active = false;
      comp.emptyListMessage = 'Test message';
      const id: string = 'test-id';
      (fixture.elementRef.nativeElement as HTMLElement).id = id;
      fixture.detectChanges();

      let item: DebugElement = fixture.debugElement.query(By.css('.without-results'));
      expect(item).toBeNull();

      comp.active = true;
      fixture.detectChanges();

      item = fixture.debugElement.query(By.css('.without-results'));
      expect(item).toBeDefined();
      expect(item.nativeElement).toBeDefined();
      expect((item.nativeElement as HTMLDivElement).innerText).toEqual(comp.emptyListMessage);
   });

   it('should propagate emit on select', () => {
      comp.items = simpleItems;
      comp.active = true;
      const id: string = 'test-id';
      (fixture.elementRef.nativeElement as HTMLElement).id = id;
      spyOn(comp.change, 'emit');

      fixture.whenStable().then(() => {
         comp.onChange(simpleItems[0]);
         expect(comp.change.emit).toHaveBeenCalled();
         expect(comp.change.emit).toHaveBeenCalledWith(simpleItems[0]);
      });
   });
});
describe('StDropdownMenuComponent', () => {
   describe('Instance', () => {
      let instanceTestFixture: ComponentFixture<TestDropdownComponent>;
      let instanceTestComp: TestDropdownComponent;
      beforeEach(async(() => {
         TestBed.configureTestingModule({
            imports: [StDropdownMenuModule],
            declarations: [TestDropdownComponent]
         }).compileComponents();  // compile template and css
      }));

      beforeEach(() => {
         instanceTestFixture = TestBed.createComponent(TestDropdownComponent);
         instanceTestComp = instanceTestFixture.componentInstance;
      });

      afterEach(() => {
         instanceTestFixture.destroy();
      });

      it('should adjust to button width when have button element', () => {
         instanceTestComp.items = simpleItems;
         instanceTestComp.active = false;
         instanceTestFixture.detectChanges();

         expect(instanceTestComp.dropdownItem.widthMenu).toEqual(instanceTestComp.dropdownWidth);
      });

      it('should have scroll to 0 in menu when without it\'s selected', () => {
         instanceTestComp.items = simpleItems;
         instanceTestComp.active = true;
         instanceTestFixture.detectChanges();

         let ul: HTMLInputElement = instanceTestFixture.debugElement.query(By.css('ul')).nativeElement;
         expect(ul.scrollTop).toBe(0);
      });

      it('should have scroll to 0 in menu', () => {
         instanceTestComp.items = simpleItems;
         instanceTestComp.active = true;
         instanceTestComp.selected = simpleItems[0];
         instanceTestFixture.detectChanges();

         let ul: HTMLInputElement = instanceTestFixture.debugElement.query(By.css('ul')).nativeElement;
         expect(ul.scrollTop).toBe(0);
      });

      it('should have scroll to 0 in menu when item list it\'s empty ', () => {
         instanceTestComp.items = [];
         instanceTestComp.active = true;
         instanceTestComp.selected = simpleItems[0];
         instanceTestFixture.detectChanges();

         let ul: HTMLInputElement = instanceTestFixture.debugElement.query(By.css('ul')).nativeElement;
         expect(ul.scrollTop).toBe(0);
      });
   });
});

