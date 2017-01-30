import { Component } from '@angular/core';
import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'dropdown-example',
   templateUrl: 'dropdown.component.html'
})

export class DropdownComponent {

   public items: Array<any> = [
      {
         label: 'Item 1',
         value: 1
      },
      {
         label: 'Item 2',
         value: 2
      },
      {
         label: 'Item 3',
         value: 3
      },
      {
         label: 'Item 4',
         value: 4
      }
   ];

   public items10: Array<any> = [
      {
         label: 'Item 1',
         value: 1
      },
      {
         label: 'Item 2',
         value: 2
      },
      {
         label: 'Item 3',
         value: 3
      },
      {
         label: 'Item 4',
         value: 4
      },
      {
         label: 'Item 5',
         value: 5
      },
      {
         label: 'Item 6',
         value: 6
      },
      {
         label: 'Item 7',
         value: 7
      },
      {
         label: 'Item 8',
         value: 8
      }
   ];

   public itemsWithIcon: Array<any> = [
      {
         label: 'Edit',
         icon: 'icon-edit2',
         value: 'edit'
      },
      {
         label: 'Duplicate',
         icon: 'icon-copy',
         value: 'duplicate'
      },
      {
         label: 'Add',
         icon: 'icon-copy',
         value: 'add'
      },
      {
         label: 'Delete',
         icon: 'icon-copy',
         value: 'delete'
      }
   ];

   public apiDoc: ApiDoc = {
      title: 'Dropdown',
      description: 'The dropdown component represents a clickable dropdown.',
      haveModel: true,
      // tslint:disable:max-line-length
      apiSection: {
         inputs: [
            {
               paramName: 'button', type: TYPES.STR, required: true, details: 'This parameter displays the button text'
            },
            {
               paramName: 'active', type: TYPES.BOOL, required: false, details: 'Allows to enable or disable the dropdown'
            },
            {
               paramName: 'disabled', type: TYPES.BOOL, required: false, details: 'Disables the dropdown menu button'
            },
            {
               paramName: 'default', type: TYPES.BOOL, required: false, details: 'This parameter allows to keep the default text as the dropdown\'s permanent value'
            },
            {
               paramName: 'items', type: TYPES.OBJ, required: true, details: 'Values array that receives the dropdown'
            },
            {
               paramName: 'width', type: TYPES.NUM, required: true, details: 'This parameter change the attribute width of dropdown'
            },
         ],
         outputs: [
            {
               paramName: 'click', type: TYPES.BOOL, required: false, details: 'This event is triggered when the button is clicked on the dropdown, it tells you if it is active or not'
            },
            {
               paramName: 'change', type: TYPES.BOOL, required: false, details: 'This event fires when the selected value changes in the dropdown, returns the value of the element'
            }
         ]
      },
      exampleDesc: `You can see below several samples showing different the most common configurations of the dropdown component inside a Stratio application.`
   };
   // tslint:enable:max-line-length
}
