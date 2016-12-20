import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { StTab } from './st-tab-box.interface';

@Component({
  selector: 'st-tab-box',
  template: require('./st-tab-box.component.html'),
  styles: [require('./st-tab-box.component.scss')],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StTabBoxComponent {
  @Input() tabs: StTab[] = [];
  @Input() qaTag: string;
  @Output() select: EventEmitter<StTab> = new EventEmitter<StTab>();

  constructor() {
  }

  onClick(selectedTab: StTab): void {
    for (let tab of this.tabs) {
      tab.active = false;
    }
    selectedTab.active = true;
    this.select.emit(selectedTab);
  }

  getTabWidth(): string {
    return `${(100 / this.tabs.length).toFixed(2)}%`;
  }
}
