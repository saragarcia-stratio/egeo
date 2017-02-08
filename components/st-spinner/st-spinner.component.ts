import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'st-spinner',
  templateUrl: './st-spinner.component.html',
  styleUrls: ['./st-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StSpinnerComponent {
  @Input() imageUrl: string;
}
