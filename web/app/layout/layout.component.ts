import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent {
   @Input() currentUrl: string;

   constructor(private router: Router) {

      router.events.subscribe((val) => {
         this.currentUrl = val.url;
      });
   }
}
