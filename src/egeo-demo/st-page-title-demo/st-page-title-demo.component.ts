/*
 * Copyright (C) 2016 Stratio (http://stratio.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
   selector: 'st-page-title-demo-example',
   templateUrl: './st-page-title-demo.component.html',
   styleUrls: ['st-page-title-demo.component.scss']
})

export class StPageTitleDemoComponent {
   public title: string = 'st page title demo';
   public error: boolean = false;
   public errorMsg: string = '';
   public minlength: number = 1;
   public maxlength: number = 20;

   constructor() {}

   public editTitle(value: string) {
      if (value.length === this.maxlength) {
         this.error = true;
         this.errorMsg = 'Error filling page title input';
      } else {
         this.error = false;
         this.errorMsg = '';
      }
   }

}
