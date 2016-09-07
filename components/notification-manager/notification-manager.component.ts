import { Component, Input } from '@angular/core';
import { StNotificationManager, StNotification } from './shared';

@Component({
  selector: 'st-notification-manager',
  template: require('./notification-manager.component.html'),
  styles: [require('./notification-manager.component.scss')]
})
export class StNotificationManagerComponent {

  @Input() notificationManager: StNotificationManager;

  constructor() { }
}
