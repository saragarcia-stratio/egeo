import { Component, Input, OnInit } from '@angular/core';
import { StNotification, SEVERITY } from '../notification.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'st-notification',
  template: require('./notification.component.html'),
  styles: [require('./notification.component.scss')]
})
export class StNotificationComponent implements OnInit {

  @Input() notification: StNotification;

  constructor() { }

  enter(): void {
    this.notification.pauseNotify();
  }

  leave(): void {
    this.notification.continueNotify();
  }

  ngOnInit(): void {
    this.notification.notify();
  }

  closeNotification(): void {
    this.notification.cancel();
  }

  getIcon(): string {
    switch (this.notification.severity) {
      case SEVERITY.ERROR: return 'icon-ban';
      case SEVERITY.WARNING: return 'icon-alert';
      case SEVERITY.SUCCESS: return 'icon-circle-check';
      default: return '';
    }
  }

  getSeverityColor(): string {
     switch (this.notification.severity) {
      case SEVERITY.ERROR: return 'error';
      case SEVERITY.WARNING: return 'warning';
      case SEVERITY.SUCCESS: return 'success';
      default: return '';
    }
  }

  goTo(): void {
    window.open(this.notification.link.link);
  }
}
