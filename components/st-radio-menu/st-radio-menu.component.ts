import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
@Component({
   selector: 'st-radio-menu',
   template: require('./st-radio-menu.component.html'),
   styles: [require('./st-radio-menu.component.scss')],
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class StRadioMenuComponent {
   @Input() activeOption: string;
   @Input() options: Array<string>;
   @Input() qaTag: string;
   @Output() changedOption: EventEmitter<any> = new EventEmitter<any>();

   constructor() {
   }

   isActive(optionName: string): boolean {
      return this.activeOption === optionName;
   }

   activateOption(optionName: string): void {
      this.activeOption = optionName;
      this.changedOption.emit(optionName);
   }
}
