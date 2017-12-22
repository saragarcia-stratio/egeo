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
import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
   selector: 'st-tag-input-demo',
   templateUrl: 'st-tag-input-demo.component.html',
   styleUrls: ['./st-tag-input-demo.component.scss']
})
export class StTagInputDemoComponent implements OnInit {
   @ViewChild('templateDrivenForm') public templateDrivenForm: NgForm;

   public tags: any = {
      reactive: ['Tag Reactive', 'Tag Reactive 2', 'Tag Reactive 3'],
      reactiveRequired: [],
      reactiveDisabled: [],
      templateDriven: ['Tag Template Driven1', 'Tag Template Driven2'],
      templateDrivenRequired: [],
      templateDrivenDisabled: []
   };

   public reactiveForm: FormGroup; // our model driven form
   public forceReactiveValidations: boolean = false;
   public forceTemplateDriveValidations: boolean = false;
   public errorReactiveMessage: string | null = null;
   public errorTemplateDriveMessage: string | null = null;
   // public disabled: boolean = false; TODO

   constructor(private _fb: FormBuilder) {
      this.reactiveForm = _fb.group({
         'tag-input-reactive': [this.tags.reactive],
         'tag-input-reactive-required': [this.tags.reactiveRequired, Validators.required],
         'tag-input-reactive-disabled': [this.tags.reactiveDisabled]
      });
   }

   ngOnInit(): void {
      this.reactiveForm.valueChanges.subscribe(res => console.log('Reactive Form', res));
      this.templateDrivenForm.valueChanges.subscribe(res => console.log('Template Driven Form', res));
   }

   onSubmitReactiveForm(): void {
      this.forceReactiveValidations = true;
      this.errorReactiveMessage = this.reactiveForm.valid ? null : 'Error';
   }

   onSubmitTemplateDrivenForm(): void {
      this.forceTemplateDriveValidations = true;
      this.errorTemplateDriveMessage = this.templateDrivenForm.valid ? null : 'Error';
   }
}
