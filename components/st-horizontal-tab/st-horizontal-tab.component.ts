import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { StHorizontalTab } from './st-horizontal-tab.interface';

@Component({
  selector: 'st-horizontal-tab',
  template: require('./st-horizontal-tab.component.html'),
  styles: [require('./st-horizontal-tab.component.scss')],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StHorizontalTabComponent {
  @Input() tabs: StHorizontalTab[] = [];
  @Input() description: string;
  @Input() qaTag: string;
  @Output() select: EventEmitter<StHorizontalTab> = new EventEmitter<StHorizontalTab>();

  constructor() {
  }

  onClick(selectedTab: StHorizontalTab): void {
    for (let tab of this.tabs) {
      tab.active = false;
    }
    selectedTab.active = true;
    this.select.emit(selectedTab);
  }
}
