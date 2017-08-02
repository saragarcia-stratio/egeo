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
   templateUrl: './st-tip-demo.component.html',
   styleUrls: ['./st-tip-demo.component.scss']
})
export class StTipDemoComponent {
   text: string = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
   Aenean commodo ligula eget dolor. Aenean massa.
   Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
   Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
   Nulla consequat massa quis enim.`;
}
