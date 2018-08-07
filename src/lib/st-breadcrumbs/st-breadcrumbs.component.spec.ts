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
import { SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { StBreadCrumbsComponent } from './st-breadcrumbs.component';
import { StBreadCrumbItem } from './st-breadcrumbs.interface';

const item: StBreadCrumbItem = {
   label: 'section4',
   icon: 'icon-home'
};

describe('StBreadCrumbsComponent', () => {
   let component: StBreadCrumbsComponent;
   let fixture: ComponentFixture<StBreadCrumbsComponent>;

   const menuMock: StBreadCrumbItem[] = [{ icon: 'icon-home' }, { label: 'section1', icon: '' }, { label: 'section2', icon: '' },
      { label: 'section3'}, { label: 'section4', icon: 'icon-home' }, { label: 'section5', icon: '' }, { label: 'section6', icon: '' }];
   const expectedIndexShowing5: number[] = [0, -1, 3, 4, 5, 6];
   const expectedIndexShowing10: number[] = [0, 1, 2, 3, 4, 5, 6];

   beforeEach(
      async(() => {
         TestBed.configureTestingModule({
            declarations: [StBreadCrumbsComponent],
            schemas: [NO_ERRORS_SCHEMA]
         }).compileComponents(); // compile template and css
      })
   );

   beforeEach(() => {
      fixture = TestBed.createComponent(StBreadCrumbsComponent);
      component = fixture.componentInstance;
      component.options = menuMock;
   });

   it('Should be initialized with elements to show set to 10 options', () => {
      component.elementsToShow = 10;
      fixture.detectChanges();

      expect(component.elementsToShow).toEqual(10);
      expect(component.indexArray).toEqual(expectedIndexShowing10);
   });

   it('And user clicks on an element, component emits the element position', () => {
      spyOn(component.select, 'emit');
      fixture.detectChanges();

      component.onSelect(2);
      expect(component.select.emit).toHaveBeenCalledWith(2);
   });

   it('If user clicks on the active element, nothing happens', () => {
      spyOn(component.select, 'emit');
      fixture.detectChanges();

      component.onSelect(6);
      expect(component.select.emit).not.toHaveBeenCalled();
   });

   it('Should show first element, 3 dots and the last 4 elements ', () => {
      fixture.detectChanges();

      expect(component.elementsToShow).toEqual(5);
      expect(component.indexArray).toEqual(expectedIndexShowing5);
   });

   it('Should emit real position when user click on dots', () => {
      fixture.detectChanges();

      spyOn(component.select, 'emit');
      component.onSelect(-1);
      expect(component.select.emit).toHaveBeenCalledWith(2);
   });

   it('should show a option with label and icon', () => {
      component.options[1] = item;
      fixture.detectChanges();
      expect(component.hasLabel).toBeTruthy();
      expect(component.hasIcon).toBeTruthy();
      expect(component.getIcon(1)).toEqual('icon-home');
      expect(component.getLabel(1)).toEqual('section4');
   });

   it('Should get label when index is greater than -1', () => {
      fixture.detectChanges();
      expect(component.getLabel(3)).toEqual(menuMock[3].label);
   });

   it(`should not show anything if not have label`, () => {
      let label = component.getLabel(0);
      fixture.detectChanges();
      expect(component.hasLabel(0)).toBeFalsy();
   });

   it('Should get icon when index is greater than -1', () => {
      fixture.detectChanges();
      expect(component.getIcon(4)).toEqual(menuMock[4].icon);
   });
   it('Should get 3 dots when index is -1', () => {
      fixture.detectChanges();
      expect(component.getLabel(-1)).toEqual('...');
   });
   it('Should get icon empty when index is -1', () => {
      fixture.detectChanges();
      expect(component.getIcon(-1)).toEqual('');
   });

   it(`should not show anything if not have icon`, () => {
      let icon = component.getIcon(3);
      fixture.detectChanges();
      expect(component.hasIcon(3)).toBeFalsy();
   });

   it('Should recalculate initPos and elements to show when changes', () => {
      fixture.detectChanges();
      expect(component.indexArray).toEqual(expectedIndexShowing5);

      component.ngOnChanges({});
      expect(component.indexArray).toEqual(expectedIndexShowing5);

      component.ngOnChanges({ elementsToShow: new SimpleChange(5, 7, true) });
      component.elementsToShow = 7;

      expect(component.indexArray).toEqual([0, 1, 2, 3, 4, 5, 6]);

      component.options = [...menuMock, {label: 'section7'}];
      component.ngOnChanges({ options: new SimpleChange(menuMock, component.options, true)});
      expect(component.indexArray).toEqual([0, -1, 2, 3, 4, 5, 6, 7]);
   });
});
