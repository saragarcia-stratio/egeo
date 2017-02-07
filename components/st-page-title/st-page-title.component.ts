import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

@Component({
  selector: 'st-page-title',
  templateUrl: './st-page-title.component.html',
  styleUrls: ['./st-page-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StPageTitleComponent {
   @Input() title: string = '';
   @Input() leftButton: string = '';
   @Input() qaTag: string = '';
   @Output() clickButton: EventEmitter<any> = new EventEmitter();
   
   onClickedButton(): void {
      this.clickButton.emit();
   }
}
