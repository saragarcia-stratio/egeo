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
import { clone as _clone } from 'lodash';

import { StDemoLoggerSeverity } from '../shared/st-demo-logger/st-demo-loger.model';
import { StDemoLoggerService } from '../shared/st-demo-logger/st-demo-logger.service';
import { StBreadCrumbItem } from '@stratio/egeo';

@Component({
   selector: 'st-breadcrumbs-demo',
   templateUrl: 'st-breadcrumbs-demo.html'
})
export class StBreadcrumbsDemoComponent {
   public output: string;
   public options: StBreadCrumbItem[] = [];

   private originalOptions: StBreadCrumbItem[] = [{ label: 'Home', icon: 'icon-home2' }];
   private otherOptions: StBreadCrumbItem[] = [{ icon: 'icon-home2' },
      { icon: 'icon-corner-down-left' },
      { icon: 'icon-corner-down-right' },
      { icon: 'icon-corner-left-down' },
      { icon: 'icon-corner-left-up' },
      { icon: 'icon-corner-right-down' },
      { icon: 'icon-corner-right-up' },
      { icon: 'icon-corner-up-left' },
      { icon: 'icon-corner-up-right' }
   ];

   private otherOptions2: StBreadCrumbItem[] = [{ icon: 'icon-home2' },
      { label: 'icon-corner-down-left' },
      { icon: 'icon-corner-down-right' },
      { label: 'icon-corner-left-down' },
      { icon: 'icon-corner-left-up' },
      { label: 'icon-corner-right-down' },
      { icon: 'icon-corner-right-up' },
      { label: 'icon-corner-up-left' },
      { icon: 'icon-corner-up-right' }
   ];

   constructor(private _logger: StDemoLoggerService) {
      for (let i = 1; i < 15; i++) {
         this.originalOptions.push({label: 'level' + i, icon: 'icon-check'});
      }
      this.reset();
      this._logger.maxMessages = 15;
   }

   outputEmitter(pos: number): void {
      this.options = this.options.slice(0, pos + 1);
      this._logger.notifyAlert(StDemoLoggerSeverity.INFO, `Pos clicked: ${pos}`);
   }

   reset(): void {
      this.options = _clone(this.originalOptions);
   }
}
