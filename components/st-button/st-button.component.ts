import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'st-button',
  template: require('./st-button.component.html'),
  styles: [require('./st-button.component.scss')]
})

export class StButtonComponent {
   @Input() inputType: string = 'button'; // button / submit / reset
   @Input() isDisabled: boolean = false;
   @Input() leftIcon: string;
   @Input() qaTag: string;
   @Input() rightIcon: string;
   @Input() subtypeClass: string = 'default';
   @Input() text: string = 'Click Me';
   @Input() themeClass: string;
   @Input() typeClass: string = 'btnMain';

   @Output() onClick: EventEmitter<any> = new EventEmitter();

   constructor() {}

   private getButtonTypeClass(): string {
      let cssClass: string;

      if (this.typeClass) {
        cssClass = 'st-button--' + this.typeClass;
      }

      if (this.subtypeClass) {
        cssClass = cssClass + ' ' +  'st-button--' + this.typeClass + '-' + this.subtypeClass;
      }

      if (this.themeClass) {
        cssClass = cssClass + ' ' + 'st-button--' + this.themeClass;
      }

      return cssClass;
   }

   private onClickEvent(event: any) {
     this.onClick.emit(event);
   }
}
