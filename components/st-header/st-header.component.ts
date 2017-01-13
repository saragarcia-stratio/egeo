import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { StHeaderModel } from './shared';

@Component({
  selector: 'st-header',
  template: require('./st-header.component.html'),
  styles: [require('./st-header.component.scss')],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StHeaderComponent {

   @Input() appName: string | undefined;
   @Input() appLogoPath: string | undefined;

   @Input() menu: Array<StHeaderModel> = [];

   constructor() {}


}
