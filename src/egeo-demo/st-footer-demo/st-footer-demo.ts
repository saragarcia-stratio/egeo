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
import { Component } from '@angular/core';
import { StFooterLink } from '@stratio/egeo';

@Component({
   selector: 'st-footer-demo',
   templateUrl: 'st-footer-demo.html',
   styleUrls: ['./st-footer-demo.scss']
})
export class StFooterDemoComponent {
   public rightsText: string;
   public links: Array<StFooterLink> = new Array<StFooterLink>();

   constructor() {
      this.rightsText = '© Stratio Big Data Inc. All Rights Reserved';
      this.links.push({
         title: 'Legal Terms',
         url: 'http://www.google.es'
      });
      this.links.push({
         title: 'Help',
         url: 'http://www.google.es'
      });
      this.links.push({
         title: 'Internal Content',
         router: 'info-box'
      });
      this.links.push({
         title: 'Modal Open'
      });
   }

   onLinkChange(event: MouseEvent): void { }
}
