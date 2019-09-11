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
import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl } from '@angular/forms';
import { StDropDownMenuItem } from '@stratio/egeo';

@Component({
   selector: 'select-demo',
   templateUrl: 'select-demo.html',
   styleUrls: ['./select-demo.scss']
})

export class SelectDemoComponent {
   @ViewChild('templateDrivenForm') public templateDrivenForm: NgForm;

   public configDoc: any = {
      html: 'demo/st-select-demo/select-demo.html',
      ts: 'demo/st-select-demo/select-demo.ts',
      component: 'lib/st-select/st-select.ts'
   };

   options: StDropDownMenuItem[] = [];
   model: any = {
      option1: null
   };
   reactiveForm: FormGroup; // our model driven form

   disabled: boolean = false;

   formControl: FormControl = new FormControl('', [Validators.required]);

   constructor(private _fb: FormBuilder) {
      this.formControl.markAsDirty();
      this.options.push({label: 'Select an option', value: undefined});
      for (let i: number = 0; i < 10; i++) {
         this.options.push({
            label: `option-${i}`,
            value: i
         });
      }
      this.model.option1 = 3;

      this.options[5].selected = true;

      this.reactiveForm = this._fb.group({
         option1: [this.model.option1, Validators.required]
      });
   }

   onSelect(value: any): void {
      if (value === undefined) {
         this.model.option1 = undefined;
      }
   }

   changeDisabled(): void {
      const controlName: string = 'option1';
      this.disabled = !this.disabled;
      if (this.disabled) {
         this.reactiveForm.get(controlName).disable();
         this.templateDrivenForm.controls[controlName].disable();
      } else {
         this.reactiveForm.get(controlName).enable();
         this.templateDrivenForm.controls[controlName].enable();
      }
   }

   onSubmitReactiveForm(): void {
      this.model.option1 = this.reactiveForm.value.option1;
      this.model.option2 = this.reactiveForm.value.option2;
   }

   changeOptions(): void {
      this.options = [];
      for (let i: number = 0; i < 10; i++) {
         this.options.push({
            label: `new options-${i}`,
            value: (10 + i)
         });
      }
   }
}
