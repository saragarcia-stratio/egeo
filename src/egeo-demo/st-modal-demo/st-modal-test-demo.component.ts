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
import { Component } from '@angular/core';

@Component({
   selector: 'st-modal-test',
   styles: [`
         h1 {
            font-weight: bold;
            font-size: 23px;
         }
         p {
            color: #2d96bd;
            font-weight: normal;
         }
   `],
   template: `
   <h1>Hello World</h1>
   <br>
   <p>This is a modal with a component inside</p>
   `
})
export class StModalDemoTestComponent {}
