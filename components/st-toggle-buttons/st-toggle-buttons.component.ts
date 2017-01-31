import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { StToggleButton } from './st-toggle-buttons.interface';

@Component({
   selector: 'st-toggle-buttons',
   template: require('./st-toggle-buttons.component.html'),
   styles: [require('./st-toggle-buttons.component.scss')],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StToggleButtonsComponent {
   @Input() tabs: StToggleButton[] = [];
   @Input() description: string;
   @Input() qaTag: string;
   @Output() select: EventEmitter<StToggleButton> = new EventEmitter<StToggleButton>();

   onClick(selectedTab: StToggleButton): void {
      for (let tab of this.tabs) {
         tab.active = false;
      }
      selectedTab.active = true;
      this.select.emit(selectedTab);
   }
}
