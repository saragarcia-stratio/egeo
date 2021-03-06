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
import { Component, Input, HostBinding } from '@angular/core';

@Component({
   selector: 'st-progress-bar',
   templateUrl: 'st-progress-bar.html',
   styleUrls: ['st-progress-bar.scss']
})
/**
 * @description {Component} Launcher
 *
 * This components show a animated bar to be used while loading data
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-progress-bar></st-progress-bar>
 *
 * ```
 */

export class StProgressBarComponent {

   /** @Input (Boolean) [wider] Option for a bigger progress-bar */
   @HostBinding('class.wider')
   @Input() wider: Boolean;

}
