import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'st-header',
  template: require('./st-header.component.html'),
  styles: [require('./st-header.component.scss')],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StHeaderComponent {

   constructor() {}
}
