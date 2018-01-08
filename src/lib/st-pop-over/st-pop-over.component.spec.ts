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
import { Component, DebugElement, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StPopModule } from '../st-pop/st-pop.module';
import { StPopOverComponent } from './st-pop-over.component';

let qaTag: string = 'pop-over-test';
let title: string = 'Pop Over Title';
let hidden: boolean = true;

describe('StPopOverComponent', () => {

   let component: StPopOverComponent;
   let fixture: ComponentFixture<StPopOverComponent>;
   let de: DebugElement;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [StPopModule],
         declarations: [StPopOverComponent, StPopOverComponent]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StPopOverComponent);
      component = fixture.componentInstance;
   });

   it('It has to display content inside a span with a title', () => {
      component.title = title;
      fixture.detectChanges();

      let itemElement = fixture.nativeElement.querySelector('span');
      expect(itemElement.innerHTML).toContain(title);
   });

   it('It has to hide when hidden input is false/undefined', () => {
      component.title = title;
      fixture.detectChanges();

      let itemElement = fixture.nativeElement.querySelector('[hidden]');
      expect(itemElement).toBeNull();
   });

   it('It has to hide when hidden input is true', () => {
      component.title = title;
      component.hidden = hidden;
      fixture.detectChanges();

      let itemElement = fixture.nativeElement.querySelector('[hidden]');
      expect(itemElement).toBeDefined();
   });

   it('It has to hide settings button when showSettingBtn input is false', () => {
      component.showSettingBtn = false;
      fixture.detectChanges();

      let itemElement = fixture.nativeElement.querySelector('.st-pop-over__setting-action');
      expect(itemElement).toBeNull();
   });

   it('It has to display settings button when showSettingBtn input is true', () => {
      component.showSettingBtn = true;
      fixture.detectChanges();

      let itemElement = fixture.nativeElement.querySelector('.st-pop-over__setting-action');
      expect(itemElement).not.toBeNull();
   });

   it('It has to display settings button when showSettingBtn input is true', () => {
      component.showSettingBtn = true;
      fixture.detectChanges();

      spyOn(component.clickConfig, 'emit');

      let itemElement = fixture.nativeElement.querySelector('.st-pop-over__setting-action');
      itemElement.click();
      fixture.detectChanges();

      expect(component.clickConfig.emit).toHaveBeenCalled();
   });
});
