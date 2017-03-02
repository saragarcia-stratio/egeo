import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { StTwoListSelectionElement, StTwoListSelectionAction } from '../st-two-list-selection.model';
import { CheckRequired, Required } from '../../decorators';

@Component({
   selector: 'list-selection',
   templateUrl: './list-selection.component.html',
   styleUrls: ['./list-selection.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListSelectionComponent {

   @Input() @Required list: Array<StTwoListSelectionElement>;
   @Input() editable: boolean = false;
   @Input() @Required title: string;
   @Input() @Required searchPlaceholder: string;
   @Input() @Required qaTag: string;

   @Output() selectItem: EventEmitter<StTwoListSelectionAction> = new EventEmitter<StTwoListSelectionAction>();
   @Output() search: EventEmitter<string> = new EventEmitter<string>();


   get searchQaTag(): string {
      return this.qaTag + '-search';
   }

   get listQaTag(): string {
      return this.qaTag + '-list';
   }

   getAction(element: StTwoListSelectionElement, pos: number): StTwoListSelectionAction {
      return {
         element: element,
         position: pos
      };
   }
}
