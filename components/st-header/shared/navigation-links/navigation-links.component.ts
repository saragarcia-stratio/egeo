import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { StHeaderModel } from '../st-header.model';

@Component({
   selector: 'navigation-links',
   styles: [require('./navigation-links.component.scss')],
   template: require('./navigation-links.component.html'),
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationLinksComponent {

   @Input() menu: Array<StHeaderModel> = [];


   public hasIcon(option: StHeaderModel): boolean {
      return option.icon !== undefined;
   }
}
