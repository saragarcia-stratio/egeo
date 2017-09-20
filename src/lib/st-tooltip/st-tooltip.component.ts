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
import { Component, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Component({
   selector: '[st-tooltip]',
   styleUrls: ['./st-tooltip.component.scss'],
   templateUrl: './st-tooltip.component.html'
})
export class StTooltipComponent {

   @HostBinding('class.st-tooltip') classTooltip: boolean;
   @HostBinding('class.st-tooltip-on') classTooltipOn: boolean;

   private _showOnClick: boolean;
   get showOnClick(): boolean {
      return this._showOnClick;
   }

   @Input('showOnClick')
   set showOnClick(value: boolean) {
      this._showOnClick = value;
      this.classTooltip = !value;
   }

   @HostListener('document:click', ['$event']) onClick(event: Event): void {
      this.classTooltipOn = this.showOnClick && this.el.nativeElement.contains(event.target);
   }

   constructor(private el: ElementRef) {
      this.classTooltip = true;
      this.classTooltipOn = false;
      this.showOnClick = false;
   }
}
