import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'layout',
  template: require('./layout.component.html'),
  styles: [require('./layout.component.scss')]
})

export class LayoutComponent {
   @Input() isBrandingOpened: boolean;
   @Input() isStyleOpened: boolean;
   @Input() isElementsOpened: boolean;
   @Input() currentUrl: string;

   constructor(private router: Router) {
      this.isBrandingOpened = false;
      this.isStyleOpened = false;
      this.isElementsOpened = false;

      router.events.subscribe((val) => {
         this.currentUrl = val.url;
      });
   }
}
