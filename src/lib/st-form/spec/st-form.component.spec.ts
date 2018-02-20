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
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { StFormComponent } from '../st-form.component';
import { JSON_SCHEMA } from './resources/json-schema';
import { StFormFieldComponent } from '../st-form-field/st-form-field.component';
import { PipesModule } from '../../pipes/pipes.module';
import { StInputModule } from '../../st-input/st-input.module';
import { StFormDirectiveModule } from '../../directives/form/form-directives.module';
import { StFormModule } from '../st-form.module';
import { StTooltipModule } from '../../st-tooltip/st-tooltip.module';
import { StCheckboxModule } from '../../st-checkbox/st-checkbox.module';
import { StFormFieldModule } from '../st-form-field/st-form-field.module';
import { CommonModule } from '@angular/common';

let component: StFormComponent;
let fixture: ComponentFixture<StFormComponent>;

describe('StFormComponent', () => {
   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [FormsModule, ReactiveFormsModule, StInputModule, StCheckboxModule, StTooltipModule, PipesModule, StFormDirectiveModule],
         declarations: [StFormComponent, StFormFieldComponent]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StFormComponent);
      component = fixture.componentInstance;
      component.schema = Object.assign({}, JSON_SCHEMA);
      fixture.detectChanges();
   });

   describe('should render a form according its json schema', () => {
      it('a control is created for each property with its ids', () => {
         for (let propertyId in JSON_SCHEMA.properties) {
            if (JSON_SCHEMA.hasOwnProperty(propertyId)) {
               expect(fixture.nativeElement.querySelector('#' + propertyId)).not.toBeNull();
            }
         }
      });

      it('tooltips are generated using their descriptions', () => {
         fixture.whenStable().then(() => {
            fixture.detectChanges();
            for (let propertyId in JSON_SCHEMA.properties) {
               if (JSON_SCHEMA.properties.hasOwnProperty(propertyId)) {
                  let property: any = JSON_SCHEMA.properties[propertyId];

                  let label: HTMLElement = fixture.nativeElement.querySelector('#' + propertyId + '-label');

                  if (property.description) {
                     expect(label.title).toBe(property.description);
                  } else {
                     expect(label.title).toBe('');
                  }
               }
            }
         });
      });

      it('controls are displayed with their default value and label', () => {
         fixture.whenStable().then(() => {
            fixture.detectChanges();
            for (let propertyId in JSON_SCHEMA.properties) {
               if (JSON_SCHEMA.properties.hasOwnProperty(propertyId)) {
                  let property: any = JSON_SCHEMA.properties[propertyId];
                  if (property.default) {
                     expect(fixture.nativeElement.querySelector('#' + propertyId).value).toBe(property.default.toString());
                  }
                  expect(fixture.nativeElement.innerHTML).toContain(property.title);
               }
            }
         });
      });
   });
});


@Component({
   template: `
      <form novalidate>
         <st-form [schema]="schema" [(ngModel)]="model" name="generated" #formModel="ngModel">
         </st-form>
      </form>
      `
})
class FormInTemplateDrivenFormComponent {
   public schema: any = JSON_SCHEMA;
   public model: any = {};
   @ViewChild('formModel') public formModel: NgForm;
}


describe('StFormComponent in templateDriven form', () => {
   let templateDrivenFixture: ComponentFixture<FormInTemplateDrivenFormComponent>;
   let templateDrivenComp: FormInTemplateDrivenFormComponent;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [FormsModule, CommonModule, ReactiveFormsModule, StFormModule, StFormFieldModule, StInputModule, StCheckboxModule],
         declarations: [FormInTemplateDrivenFormComponent]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      templateDrivenFixture = TestBed.createComponent(FormInTemplateDrivenFormComponent);
      templateDrivenComp = templateDrivenFixture.componentInstance;
   });

   it('form can be disabled from outside', () => {
      templateDrivenFixture.detectChanges();
      templateDrivenFixture.whenStable().then(() => {
         templateDrivenComp.formModel.control.disable();
         templateDrivenFixture.detectChanges();
         for (let propertyId in JSON_SCHEMA.properties) {
            if (JSON_SCHEMA.properties.hasOwnProperty(propertyId)) {
               expect(templateDrivenFixture.nativeElement.querySelector('#' + propertyId).disabled).toBeTruthy();
            }
         }
      });
   });

   it('form can be enabled after being disabled from outside', () => {
      templateDrivenFixture.detectChanges();
      templateDrivenFixture.whenStable().then(() => {
         templateDrivenComp.formModel.control.disable();
         templateDrivenFixture.detectChanges();
         templateDrivenComp.formModel.control.enable();
         templateDrivenFixture.detectChanges();
         for (let propertyId in JSON_SCHEMA.properties) {
            if (JSON_SCHEMA.properties.hasOwnProperty(propertyId)) {
               expect(templateDrivenFixture.nativeElement.querySelector('#' + propertyId).disabled).toBeFalsy();
            }
         }
      });
   });
});
