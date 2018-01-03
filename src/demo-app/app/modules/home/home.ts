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
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
   selector: 'demo-home',
   templateUrl: './home.html',
   styleUrls: ['./home.scss']
})
export class HomeComponent implements AfterViewInit {
   @ViewChild('background') background: ElementRef;

   ngAfterViewInit(): void {
      (this.background.nativeElement as HTMLDivElement).style.backgroundImage = 'url(assets/images/bg-cover-egeo.png)';
   }
 }
