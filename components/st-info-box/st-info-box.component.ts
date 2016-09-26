import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'st-info-box',
  template: require('./st-info-box.component.html'),
  styles: [require('./st-info-box.component.scss')],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class StInfoBoxComponent {
  @Input() icon: string;
  @Input() title: string;

  constructor() {
  }

}
