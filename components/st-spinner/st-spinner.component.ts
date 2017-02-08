import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'st-spinner',
  template: require('./st-spinner.component.html'),
  styles: [require('./st-spinner.component.scss')],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StSpinnerComponent {
  @Input() imageUrl: string;
}
