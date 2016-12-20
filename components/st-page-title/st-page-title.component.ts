import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'st-page-title',
  template: require('./st-page-title.component.html'),
  styles: [require('./st-page-title.component.scss')],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StPageTitleComponent {
   @Input() title: string = '';
}
