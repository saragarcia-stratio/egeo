import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
   selector: 'layout',
   templateUrl: 'layout.component.html',
   styleUrls: ['layout.component.scss']
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
      if (this.formsUrls.indexOf(this.currentUrl) > -1) {
         this.isFormsOpened = true;
      }
      if (this.buttonsUrls.indexOf(this.currentUrl) > -1) {
         this.isButtonsOpened = true;
      }
      if (this.utilsUrls.indexOf(this.currentUrl) > -1) {
         this.isUtilsOpened = true;
      }
      if (this.navigationUrls.indexOf(this.currentUrl) > -1) {
         this.isNavigationOpened = true;
      }
      if (this.tabsUrls.indexOf(this.currentUrl) > -1) {
         this.isTabsOpened = true;
      }
      if (this.feedbacksUrls.indexOf(this.currentUrl) > -1) {
         this.isFeedbackOpened = true;
      }
   }
}
