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

// Component
import { StLabelComponent } from './st-label.component';
import { StTooltipModule } from '../st-tooltip';

@Component({
   template: `<label st-label></label>`
})
class TestStLabelComponent { }

let component: TestStLabelComponent;
let fixture: ComponentFixture<TestStLabelComponent>;
let labelContent: string = 'label content';
let nativeElement: any;
let template: string = '';

function createTestComponent(customTemplate?: string): Promise<ComponentFixture<TestStLabelComponent>> {
   if (customTemplate) {
      TestBed.overrideComponent(TestStLabelComponent, {
         set: {
            template: customTemplate
         }
      });
   }
   return TestBed.compileComponents();
}

describe('StLabel', () => {

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [
            StLabelComponent,
            TestStLabelComponent
         ],
         imports: [StTooltipModule]
      });
   }));

   it('Exist an span element that contains label content', async(() => {
      template = '<label st-label>' + labelContent + '</label>';
      createTestComponent(template).then(() => {
         fixture = TestBed.createComponent(TestStLabelComponent);
         fixture.detectChanges();
         nativeElement = fixture.nativeElement;
         expect(nativeElement.querySelector('label').textContent).toContain(labelContent);
      });
   }));

   it('Label tag has st-label and st-tooltip classes', async(() => {
      template = '<label st-label>' + labelContent + '</label>';
      createTestComponent(template).then(() => {
         fixture = TestBed.createComponent(TestStLabelComponent);
         fixture.detectChanges();
         nativeElement = fixture.nativeElement;
         expect(nativeElement.querySelector('label').classList.contains('st-label')).toBeTruthy();
         expect(nativeElement.querySelector('label').classList.contains('st-tooltip')).toBeTruthy();
      });
   }));
});
