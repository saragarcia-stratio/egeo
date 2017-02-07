import {
   Component,
   Input,
   Output,
   EventEmitter,
   ChangeDetectionStrategy,
   OnInit,
   transition,
   animate,
   style,
   state,
   trigger
} from '@angular/core';
import { StDropDownMenuGroup, StDropDownMenuItem } from './st-dropdown-menu.interface';

@Component({
   selector: 'st-dropdown-menu',
   templateUrl: 'st-dropdown-menu.component.html',
   styleUrls: ['st-dropdown-menu.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
   animations: [
      trigger('show', [
         transition(':enter', [
            style({ 'transform-origin': '100% 0', opacity: 0 }),
            animate('0.15s', style({
               opacity: 1,
               transition: 'all 0.25s cubic-bezier(0.5, 1.8, 0.9, 0.8)'
            }))
         ]),
         transition(':leave', [
            style({ 'transform-origin': '100% 0', 'opacity': 1 }),
            animate('0.15s', style({
               opacity: 0,
               transition: 'all 0.25s cubic-bezier(0.5, 1.8, 0.9, 0.8)'
            }))
         ])
      ])
   ]
})
export class StDropdownMenuComponent implements OnInit {

   @Input() active: boolean;
   @Input() items: Array<StDropDownMenuItem> | Array<StDropDownMenuGroup>;
   @Output() change: EventEmitter<Object> = new EventEmitter<Object>();

   private itemsGroup: Array<StDropDownMenuGroup> = [];

   constructor() {
   }

   ngOnInit(): void {

      if (undefined === this.items) {
         throw new Error('Attribute items is required');
      }

      if (this.isDropDownGroup(this.items)) {
         this.itemsGroup = this.items;
      }
   }

   isDropDownGroup(value: Array<StDropDownMenuItem> | Array<StDropDownMenuGroup>): value is Array<StDropDownMenuGroup> {
      return value && value.length > 0 && (<StDropDownMenuGroup>value[0]).title !== undefined;
   }

   onChange(value: string): void {
      this.change.emit(value);
   }



}

