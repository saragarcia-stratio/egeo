import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent {
   @Input() isBrandingOpened: boolean;
   @Input() isStyleOpened: boolean;
   @Input() isCatalogOpened: boolean;
   @Input() isGettingStartedOpened: boolean;
   @Input() currentUrl: string;

   constructor(private router: Router) {
      this.isBrandingOpened = false;
      this.isStyleOpened = false;
      this.isCatalogOpened = false;
      this.isGettingStartedOpened = false;

      router.events.subscribe((val) => {
         this.currentUrl = val.url;
      });
   }
}
