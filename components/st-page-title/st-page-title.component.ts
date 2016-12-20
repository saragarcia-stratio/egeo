import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'st-page-title',
  templateUrl: './st-page-title.component.html',
  styleUrls: ['./st-page-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StPageTitleComponent {
   @Input() title: string = '';
}
