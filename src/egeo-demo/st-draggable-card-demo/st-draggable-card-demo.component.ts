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
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
   templateUrl: './st-draggable-card-demo.component.html',
   styleUrls: ['./st-draggable-card-demo.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StDraggableCardDemoComponent {

   allowDrop(event: DragEvent) {
      event.preventDefault();
      event.stopPropagation();
   }

   drag(event: any): void {
      event.dataTransfer.setData("dragged-item-id", event.currentTarget.id);
      event.stopPropagation();
   }

   drop(event: any): void {
      let dataTransfer = event.dataTransfer.getData('dragged-item-id');
      let item = document.getElementById(dataTransfer);
      if (item) {
         event.currentTarget.appendChild(item);
      }

   }
}


