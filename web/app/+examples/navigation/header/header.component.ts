import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ApiDoc, TYPES } from '../../../shared';
import { StHeaderModel } from '../../../../../egeo';

@Component({
   selector: 'header-example',
   template: require('./header.component.html'),
   styles: [require('./header.component.scss')],
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent {

   public headerMenu: Array<StHeaderModel> = [
      {
         icon: 'icon-head',
         label: 'IDENTITIES',
         link: '/navigation/header/test1',
         subMenus: [{
            label: 'USER',
            link: '/navigation/header/test1/subtest1',
            isActive: true
         },
         {
            label: 'GROUP',
            link: '/navigation/header/test1/subtest2',
            isActive: true
         }],
         isActive: true
      },
      {
         icon: 'icon-puzzle',
         label: 'SERVICES',
         link: '/navigation/header/test2',
         subMenus: [],
         isActive: true
      },
      {
         icon: 'icon-paper',
         label: 'POLICIES',
         link: '/navigation/header/test3',
         subMenus: [],
         isActive: true
      },
      {
         icon: 'icon-layers',
         label: 'AUDITING',
         link: '/navigation/header/test4',
         subMenus: [],
         isActive: true
      },
      {
         icon: 'icon-cog',
         label: 'SETTINGS',
         link: '/navigation/header/test5',
         subMenus: [],
         isActive: true
      }
   ];

   constructor() {
   }

   // tslint:disable:max-line-length
   // public apiDoc: ApiDoc = {
   //    title: 'Tooltip',
   //    description: 'The tooltip component is a text box that appear floating over an other UI component to explain further information about something related to the content or the component itself. It could be shown on click or on hover.',
   //    haveModel: false,
   //    apiSection: {
   //       inputs: [
   //          { paramName: 'text', type: TYPES.STR, required: true, details: 'Text to be shown inside the tooltip' },
   //          { paramName: 'showOnClick', type: TYPES.BOOL, required: false, details: 'TRUE: Show when click, FALSE: show on hover, DEFAULT: FALSE' },
   //          { paramName: 'qaTag', type: TYPES.STR, required: true, details: 'Id value for qa test' }
   //       ],
   //       outputs: []
   //    },
   //    exampleDesc: `example desc`
   // };
   // tslint:enable:max-line-length
}
