import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MessageModal, Buttons, BUTTON_TYPES } from '../message-modal.model';

@Component({
  selector: 'stratio-message-modal',
  template: require('./message-modal.component.html'),
  styles: [require('./message-modal.component.scss')]
})
export class StMessageModalComponent {

  @Input() modal: MessageModal;

  constructor() { }

  doAction(button: Buttons): void {
    button.notify.next(button.type);
  }

  getButtonClass(button: Buttons): string {
    switch (button.type) {
      case BUTTON_TYPES.ACCEPT: return 'egeo-c-button--main-1';
      case BUTTON_TYPES.CANCEL: return 'egeo-c-button--main-2';
      default: return '';
    }
  }

}
