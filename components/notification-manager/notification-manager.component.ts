import { Component, Input } from '@angular/core';
import { StNotificationComponent, StNotificationManager, StNotification } from './shared';

@Component({
  moduleId: module.id,
  selector: 'st-notification-manager',
  directives: [StNotificationComponent],
  template: require('./notification-manager.component.html'),
  styles: [require('./notification-manager.component.scss')]
})
export class StNotificationManagerComponent {

  @Input() notificationManager: StNotificationManager;

  constructor() { }
}
