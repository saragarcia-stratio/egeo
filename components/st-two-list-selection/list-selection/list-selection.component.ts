import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { StTwoListSelectionElement } from '../st-two-list-selection.model';
import { CheckRequired, Required } from '../../decorators';

@Component({
   selector: 'list-selection',
   templateUrl: './list-selection.component.html',
   styleUrls: ['./list-selection.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListSelectionComponent {

   @Input() @Required() list: Array<StTwoListSelectionElement>;
   @Input() editable: boolean = false;
   @Input() @Required() title: string;
   @Input() @Required() searchPlaceholder: string;
   @Input() @Required() qaTag: string;

   @Output() selectItem: EventEmitter<StTwoListSelectionElement> = new EventEmitter<StTwoListSelectionElement>();
   @Output() search: EventEmitter<string> = new EventEmitter<string>();

   scrollItems: Array<StTwoListSelectionElement>;
   firstEl: number = 0;

   get searchQaTag(): string {
      return this.qaTag + '-search';
   }

   get listQaTag(): string {
      return this.qaTag + '-list';
   }
}
