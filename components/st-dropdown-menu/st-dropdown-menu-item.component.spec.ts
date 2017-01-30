import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import StDropdownMenuItemComponent from './st-dropdown-menu-item.component';
import { StDropDownMenuItem } from './st-dropdown-menu.interface';

let item: StDropDownMenuItem = {
      label: 'example 1',
      value: 1
};

describe('StDropdownMenuItemComponent', () => {

   let component: StDropdownMenuItemComponent;
   let fixture: ComponentFixture<StDropdownMenuItemComponent>;
   let de: DebugElement;

   beforeEach(() => {
      TestBed.configureTestingModule({
         declarations: [ StDropdownMenuItemComponent ]
      });

      fixture = TestBed.createComponent(StDropdownMenuItemComponent);
      component = fixture.componentInstance;


   });

   it('should throw an error for missing item attribute', () => {
      expect(() => component.ngOnInit()).toThrowError('Attribute item is required');
   });

   it('should show value 1 in item in component', () => {
      component.item = item;
      fixture.detectChanges();
      expect(component.item.value).toBe(1);
   });

   it('should click item and dispatch event change with value of item', () => {
      spyOn(component.change, 'emit');
      component.item = item;
      let itemElement = fixture.nativeElement.querySelector('li');
      itemElement.dispatchEvent(new Event('click'));
      fixture.detectChanges();
      expect(component.change.emit).toHaveBeenCalledWith(item);
   });


});
