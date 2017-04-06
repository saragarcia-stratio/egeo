import {
   animate,
   ChangeDetectionStrategy,
   Component,
   EventEmitter,
   Input,
   OnInit,
   Output,
   state,
   style,
   transition,
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
            style({ 'transform-origin': '100% 0', 'opacity': 0 }),
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
   @Input() items: StDropDownMenuItem[] | StDropDownMenuGroup[];
   @Output() change: EventEmitter<StDropDownMenuItem> = new EventEmitter<StDropDownMenuItem>();

   private itemsGroup: StDropDownMenuGroup[] = [];

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

   isDropDownGroup(value: StDropDownMenuItem[] | StDropDownMenuGroup[]): value is StDropDownMenuGroup[] {
      return value && value.length > 0 && (<StDropDownMenuGroup>value[0]).title !== undefined;
   }

   onChange(value: StDropDownMenuItem): void {
      this.change.emit(value);
   }



}

