import { Component, Input, ChangeDetectionStrategy, OnDestroy, Renderer, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { EventWindowManager } from '../../../utils';
import { StHeaderUserMenuModel } from './user-menu.model';

@Component({
   selector: 'user-menu',
   styles: [require('./user-menu.component.scss')],
   template: require('./user-menu.component.html'),
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserMenuComponent extends EventWindowManager implements OnDestroy {

   @Input() userMenuModel: StHeaderUserMenuModel;
   @Input() qaTag: string;

   constructor(
      private router: Router,
      private renderer: Renderer,
      private cd: ChangeDetectorRef,
      private elementRef: ElementRef
   ) {
      super(renderer, cd, elementRef);
   }


   public changeMenuState(event: MouseEvent): void {
      this.openElement();
   }

   public navigateToLogout(): void {
      this.router.navigate([`/${this.userMenuModel.logoutPath}`]);
      this.closeElement();
   }

   public ngOnDestroy(): void {
      this.closeElement();
   }
}
