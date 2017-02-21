import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
   selector: 'layout',
   templateUrl: './layout.component.html',
   styleUrls: ['./layout.component.scss']
})

export class LayoutComponent {
   @Input() currentUrl: string;

   public isFormsOpened: boolean = false;
   public isButtonsOpened: boolean = false;
   public isUtilsOpened: boolean = false;
   public isNavigationOpened: boolean = false;
   public isTabsOpened: boolean = false;
   public isFeedbackOpened: boolean = false;


   private formsUrls: Array<string> = ['/input'];
   private buttonsUrls: Array<string> = ['/button', '/toggle-buttons'];
   private utilsUrls: Array<string> = ['/regexp'];
   private navigationUrls: Array<string> = ['/navigation/radio-menu', '/navigation/header', '/navigation/horizontal-tabs'];
   private tabsUrls: Array<string> = ['/tab-box', '/vertical-menu'];
   private feedbacksUrls: Array<string> = ['/spinner'];

   constructor(private router: Router) {

      router.events.subscribe((val) => {
         this.currentUrl = val.url;
         this.checkUrl();
      });
   }

   checkUrl(): void {
      if (this.formsUrls.includes(this.currentUrl)) {
         this.isFormsOpened = true;
      }
      if (this.buttonsUrls.includes(this.currentUrl)) {
         this.isButtonsOpened = true;
      }
      if (this.utilsUrls.includes(this.currentUrl)) {
         this.isUtilsOpened = true;
      }
      if (this.navigationUrls.includes(this.currentUrl)) {
         this.isNavigationOpened = true;
      }
      if (this.tabsUrls.includes(this.currentUrl)) {
         this.isTabsOpened = true;
      }
      if (this.feedbacksUrls.includes(this.currentUrl)) {
         this.isFeedbackOpened = true;
      }
   }
}
