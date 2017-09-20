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

import { StTooltipComponent } from '../st-tooltip';

@Component({
   host: {class: 'st-label'},
   selector: '[st-label]',
   styleUrls: ['../st-tooltip/st-tooltip.component.scss'],
   templateUrl: './st-label.component.html'
})

export class StLabelComponent extends StTooltipComponent { }
