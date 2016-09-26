import { Component, ViewEncapsulation } from '@angular/core';
import { StHorizontalTab } from './../../../../components/';

@Component({
  selector: 'horizontal-tab-example',
  template: require('./horizontal-tab.component.html'),
  styles: [require('./horizontal-tab.component.scss')],
  encapsulation: ViewEncapsulation.None
})

export class HorizontalTabComponent {
  tabs: StHorizontalTab[];
  description: string = 'My tabs: ';

  constructor() {
    this.tabs = [
      {
        label: 'Tab1',
        number: 5,
        active: true
      }, {
        label: 'Tab2',
        number: 10,
        active: false
      }
    ];
  }

  onSelectTab(tab: StHorizontalTab): void {
    console.log('Selected tab: ' + tab.label);
  }
}
