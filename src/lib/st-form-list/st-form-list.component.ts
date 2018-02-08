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
import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup, FormArray, FormControl } from '@angular/forms';

/**
 * @description {Component} [Form list]
 *
 * The form list component allows to create dynamically list of items.
 *
 * @example
 *
 * {html}
 *
 * ```
 *  <st-form-list [schema]="jsonSchema" [(value)]="model" [(form)]="formArray" buttonLabel="Add item">
 *  </st-form-list>
 * ```
 *
 *
 */
@Component({
   selector: 'st-form-list',
   templateUrl: './st-form-list.html',
   styleUrls: ['./st-form-list.scss'],
   host: { class: 'st-form-list' },
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class StFormListComponent implements OnInit {
   /** @Input {any} [schema=''] JSON schema of items */
   @Input() schema: any;
   /** @Input {string} [buttonLabel='Add'] String displayed in the button to add more items */
   @Input() buttonLabel: string = 'Add';

   public _value: any[] = [];
   public _form: FormArray = new FormArray([]);

   onTouched = () => {
   }

   onChange: any = () => {
   }

   /** @Input {any[]} [value=''] Current list value */
   @Input()
   get value(): any[] {
      return this._value;
   }

   set value(value: any[]) {
      this._value = value;
      this.updateForm();
      this.onChange(this._value);
   }

   /** @Input {FormGroup} [form=''] Form group */
   @Input()
   get form(): FormArray {
      return this._form;
   }

   set form(form: FormArray) {
      this._form = form;
   }

   ngOnInit(): void {
      this.updateForm();
   }

   addItem(): void {
      this._value.push({});
      this._form.push(this.generateItemFormGroup());
      this.onChange(this._value);
   }

   removeItem(position: number): void {
      this._form.removeAt(position);
      this._value.splice(position, 1);
   }

   isRequired(propertyName: string): boolean {
      return propertyName && this.schema.required && this.schema.required.indexOf(propertyName) !== -1;
   }

   generateItemFormGroup(position?: number): FormGroup {
      let formGroup = new FormGroup({});
      let properties = Object.keys(this.schema.properties);
      for (let i = 0; i < properties.length; ++i) {
         let property: string = properties[i];
         let value: any = this.schema.properties[property].default;
         if (position !== undefined && this._value[i]) {
            value = position !== undefined ? this._value[i][property] : null;
         }
         formGroup.addControl(properties[i], new FormControl(value));
      }
      return formGroup;
   }


   private updateForm(): void {
      this._form.reset();
      this._form.controls = [];

      if (this._value) {
         for (let i = 0; i < this._value.length; ++i) {
            this._form.push(this.generateItemFormGroup(i));
         }
      }
   }
}
