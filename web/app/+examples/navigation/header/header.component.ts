import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Observable } from 'rxjs';
import { StHeaderModel, StHeaderUserMenuModel, EgeoResolveService } from 'egeo';

import { ApiDoc, TYPES } from '../../../shared';

@Component({
   selector: 'header-example',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

   public userMenu: StHeaderUserMenuModel = {
      logoutLabel: 'Logout',
      userName: 'Antonio H.',
      logoutPath: ''
   };

   public contentOffset: number = 0;

   public headerMenuSchema: Array<Object> = [
      {
         icon: 'icon-head',
         label: { label: 'HEADER_MENU.IDENTITIES.IDENTITIES', translate: true },
         link: '/navigation/header/test1',
         subMenus: [{
            label: { label: 'HEADER_MENU.IDENTITIES.USER', translate: true },
            link: '/navigation/header/test1/subtest1',
            isActive: true
         },
         {
            label: { label: 'HEADER_MENU.IDENTITIES.GROUP', translate: true },
            link: '/navigation/header/test1/subtest2',
            isActive: false
         }],
         isActive: true
      },
      {
         icon: 'icon-puzzle',
         label: { label: 'HEADER_MENU.SERVICES', translate: true },
         link: '/navigation/header/test2',
         subMenus: [],
         isActive: false
      },
      {
         icon: 'icon-paper',
         label: { label: 'HEADER_MENU.POLICIES', translate: true },
         link: '/navigation/header/test3',
         subMenus: [],
         isActive: true
      },
      {
         icon: 'icon-layers',
         label: { label: 'HEADER_MENU.AUDITING', translate: true },
         link: '/navigation/header/test4',
         subMenus: [],
         isActive: true
      },
      {
         icon: 'icon-cog',
         label: { label: 'HEADER_MENU.SETTINGS', translate: true },
         link: '/navigation/header/test5',
         subMenus: [],
         isActive: true
      }
   ];

   public menu: Observable<StHeaderModel>;

   // tslint:disable:max-line-length
   public apiDoc: ApiDoc = {
      title: 'Header',
      description: 'The header component is a main component of an application. This component must be on top and scroll with page, when scroll is in a calculated position, the header shrinks and fix to top.',
      haveModel: true,
      apiSection: {
         inputs: [
            { paramName: 'appName', type: TYPES.STR, required: false, details: 'Name of application to show, by default empty' },
            { paramName: 'companyName', type: TYPES.STR, required: false, details: 'Company name to show, by default: Stratio' },
            { paramName: 'menu', type: 'Array<StHeaderModel>', required: false, details: 'Array with menu option to show' },
            { paramName: 'userMenu', type: 'StHeaderUserMenuModel', required: false, details: 'Object with user menu information' },
            { paramName: 'qaTag', type: TYPES.STR, required: true, details: 'Id value for qa test' }
         ],
         outputs: [
            { paramName: 'contentChangeOffset', type: TYPES.NUM, required: false, details: '' }
         ]
      },
      exampleDesc: `You can find the example at top of page`
   };
   // tslint:enable:max-line-length

   constructor(
      private _cd: ChangeDetectorRef,
      private resolveService: EgeoResolveService,
      private translate: TranslateService
   ) {
      this.menu = this.resolveService.translate(this.headerMenuSchema, this.translate);
   }

   onContentChangeOffset(offset: number): void {
      this.contentOffset = offset + 10;
      setTimeout(() => {
         this._cd.markForCheck();
      });
   }
}
