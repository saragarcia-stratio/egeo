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
import { Component } from '@angular/core';

import { StTooltipComponent } from './st-tooltip.component';

@Component({
   template: `<span st-tooltip></st-tooltip>`
})
class TestStTooltipComponent { }

const id: string = 'tooltipId';
const originalContent: string = 'This is the original element content';
const tooltipText: string = 'This text will be displayed in our tooltip';

let component: StTooltipComponent;
let fixture: ComponentFixture<TestStTooltipComponent>;
let nativeElement: any;
let template: string = '';

function createTestComponent(customTemplate?: string): Promise<ComponentFixture<TestStTooltipComponent>> {
   if (customTemplate) {
      TestBed.overrideComponent(TestStTooltipComponent, {
         set: {
            template: customTemplate
         }
      });
   }
   return TestBed.compileComponents();
}

describe('StTooltip', () => {

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [
            StTooltipComponent,
            TestStTooltipComponent
         ]
      });
   }));

   it('It has to display content inside a span without a title', async(() => {
      template = '<span st-tooltip id="' + id + '" title="' + tooltipText + '">' + originalContent + '</span>';
      createTestComponent(template).then(() => {
         fixture = TestBed.createComponent(TestStTooltipComponent);
         nativeElement = fixture.nativeElement;
         fixture.detectChanges();

         let tooltip: Element = nativeElement.querySelector('.st-tooltip');
         expect(tooltip).toBeDefined();

         let span: Element = tooltip.querySelector('span');
         expect(span.getAttribute('title')).toBe('');
         expect(span.innerHTML).toContain(originalContent);
      });
   }));

   it('It can be configured to be displayed and hidden when user clicks on its associated content', async(() => {
      template = '<span st-tooltip id="' + id + '" title="' + tooltipText + '">' + originalContent + '</span>';
      createTestComponent(template).then(() => {
         fixture = TestBed.createComponent(TestStTooltipComponent);
         nativeElement = fixture.nativeElement;
         fixture.detectChanges();

         let tooltip: Element = nativeElement.querySelector('.st-tooltip');
         expect(tooltip).toBeDefined();

         let span: Element = tooltip.querySelector('span');
         expect(span.getAttribute('title')).toBe('');
         expect(span.innerHTML).toContain(originalContent);
      });
   }));

   it('It can be configured to be displayed and hidden when user puts the mouse on its associated content', async(() => {
      template = '<span st-tooltip id="' + id + '" title="' + tooltipText + '">' + originalContent + '</span>';
      createTestComponent(template).then(() => {
         fixture = TestBed.createComponent(TestStTooltipComponent);
         nativeElement = fixture.nativeElement;
         fixture.detectChanges();

         let tooltip: Element = nativeElement.querySelector('.st-tooltip');
         expect(tooltip).toBeDefined();

         let span: Element = tooltip.querySelector('span');
         expect(span.getAttribute('title')).toBe('');
         expect(span.innerHTML).toContain(originalContent);
      });
   }));
});
