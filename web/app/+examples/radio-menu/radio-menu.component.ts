import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {ApiDoc, TYPES} from '../../shared/api-doc/shared/api-doc.model';
import {StRadioMenuOption} from '../../../../components/st-radio-menu/st-radio-menu-option.interface';

@Component({
   selector: 'radio-menu-example',
   template: require('./radio-menu.component.html'),
   styles: [require('./radio-menu.component.scss')]
})

export class RadioMenuComponent {
   options: Array<StRadioMenuOption>;
   selectedOptionTheme1: StRadioMenuOption;
   selectedOptionTheme2: StRadioMenuOption;
   apiDoc: ApiDoc;

   constructor() {

      this.options = [{label: 'MENU.SERVICE', value: 'service'}, {label: 'MENU.NODES', value: 'nodes'}, {label: 'MENU.CASSANDRA', value: 'cassandra'}];

      this.apiDoc = {
         title: 'Radio Menu',
         description: 'Radio Menu is composed of options with radios. Generally, It is used in forms in order to change' +
         ' a certain part of form. You must keep in mind radio menu adapts its design according to his parent\'s theme.' +
         ' By default, if parent does not have any theme, it will be designed according to the gray 2 theme.',
         haveModel: true,
         apiSection: {
            description: 'This table gives you a quick overview of the inputs and outputs of a radio menu.',
            inputs: [
               {
                  paramName: 'activeOption',
                  type: TYPES.OBJ,
                  required: false,
                  details: 'Current active option'
               },
               {
                  paramName: 'options',
                  type: TYPES.ARRAY_OBJ,
                  required: true,
                  details: 'Array of string with options'
               },
               {
                  paramName: 'qaTag',
                  type: TYPES.STR,
                  required: true,
                  details: 'Identifier to generate a qa tag for each option'
               }
            ],
            outputs: [
               {
                  paramName: 'changedOption',
                  type: TYPES.OBJ,
                  required: true,
                  details: 'Event emitted when the active option is changed. This event has the selected option as param.'
               }
            ]
         },
         exampleDesc: `Next, you can see an example of radio menu in gray-1 and gray-2 themes.`
      };
   }
}
