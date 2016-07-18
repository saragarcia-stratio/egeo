import { Subject, Observable, Subscription } from 'rxjs';

export enum ERROR_EVENT_ACTION_TYPE { DELETE }

export interface NotificationEventAction {
  type: ERROR_EVENT_ACTION_TYPE;
  id: number;
  error?: StNotification;
}

export class StNotificationLink {
  constructor(public title: string, public link: string) { }
}

export enum SEVERITY { SUCCESS, WARNING, ERROR }

export class StNotification {

  static lastId: number = 0;

  public opacity: number = 0;
  public showInConsole: boolean;

  private _id: number;
  private changeVisibilityInterval: number;
  private lifeTimeout: number;
  private readed: boolean = false;

  private _stream: Subject<NotificationEventAction>;


  static generateId(): number {
    return this.lastId++;
  }

  constructor(
    public title: string,
    public message: string,
    public severity: SEVERITY,
    public timeout: number,
    public extendedTimeout: number,
    public link: StNotificationLink
  ) {
    this._id = StNotification.generateId();
  }

  notify(): void {
    this.setVisible(true);
    if (this.showInConsole) {
      this.notifyConsole();
    }
  }

  pauseNotify(): void {
    this.opacity = 1;
    this.readed = true;
    this.clearAnimation();
    this.stopLife();
  }

  continueNotify(): void {
    this.startLife();
  }

  cancel(): void {
    this.setVisible(false);
  }

  get id(): number {
    return this._id;
  }

  set notificationStream(notificationStream: Subject<NotificationEventAction>) {
    this._stream = notificationStream;
  }

  private setVisible(increase: boolean): void {
    this.changeVisibilityInterval = window.setInterval(() => this.modifyVisibility(increase), 50);
  }

  private modifyVisibility(increase: boolean): void {
    this.opacity += increase ? 0.1 : -0.1;
    if (this.opacity >= 1 || this.opacity <= 0) {
      this.clearAnimation();
      if (increase) {
        this.startLife();
      } else {
        this.notifyForRemove();
      }
    }
  }

  private clearAnimation(): void {
    window.clearInterval(this.changeVisibilityInterval);
  }

  private stopLife(): void {
    window.clearTimeout(this.lifeTimeout);
  }

  private startLife(): void {
    let timeout: number = this.readed ? this.extendedTimeout : this.timeout;
    this.lifeTimeout = window.setTimeout(() => this.setVisible(false), timeout);
  }

  private notifyForRemove(): void {
    if (this._stream !== undefined) {
      this._stream.next({type: ERROR_EVENT_ACTION_TYPE.DELETE, id: this._id});
    }
  }

  private notifyConsole(): void {
    switch (this.severity) {
      case SEVERITY.ERROR: console.error(`ERROR-${this.title}: ${this.message}`); break;
      case SEVERITY.WARNING: console.warn(`WARNING-${this.title}: ${this.message}`); break;
      case SEVERITY.SUCCESS: console.log(`SUCCESS-${this.title}: ${this.message}`); break;
      default: console.error(`ERROR: severity not found for ${this.title}: ${this.message}`); break;
    }
  }
}

export class StNotificationManager {

  private _stream: Subject<NotificationEventAction> = new Subject<NotificationEventAction>();
  private sub: Subscription;

  private _notificationList: Array<StNotification> = new Array<StNotification>();

  constructor(public showInConsole: boolean) {
    this.sub = this._stream.subscribe((action) => this.parseAction(action));
  }

  addError(title: string, message: string, severity: SEVERITY, timeout?: number, extendedTimeout?: number, link?: StNotificationLink): void {
    timeout =  timeout !== undefined ? timeout : 5000;
    extendedTimeout = extendedTimeout !== undefined ? extendedTimeout : 4000;
    let notification: StNotification = new StNotification(title, message, severity, timeout, extendedTimeout, link);
    this.insertNotification(notification);
  }

  destroyStream(): void {
    this.sub.unsubscribe();
  }

  get notificationList(): Array<StNotification> {
    return this._notificationList;
  }

  // for reactive apps
  cloneAndAdd(
    title: string,
    message: string,
    severity: SEVERITY,
    timeout?: number,
    extendedTimeout?: number,
    link?: StNotificationLink
  ): StNotificationManager {

    let notificationManager: StNotificationManager = new StNotificationManager(this.showInConsole);
    notificationManager._notificationList = [...this._notificationList];

    let lifeTimeout: number =  timeout !== undefined ? timeout : 5000;
    let extTimeout: number = extendedTimeout !== undefined ? extendedTimeout : 4000;
    notificationManager.addError(title, message, severity, lifeTimeout, extTimeout, link);

    return notificationManager;
  }

  private insertNotification(notification: StNotification): void {
    notification.notificationStream = this._stream;
    notification.showInConsole = this.showInConsole;
    this._notificationList.push(notification);
  }

  private removeNotification(id: number): void {
    let index = this._notificationList.findIndex((notification) => notification.id === id);
    if (index > -1) {
      this._notificationList.splice(index, 1);
    }
  }

  private parseAction(action: NotificationEventAction): void {
    switch (action.type) {
      case ERROR_EVENT_ACTION_TYPE.DELETE:
        this.removeNotification(action.id);
        break;
      default: console.error('Action not recognized'); break;
    }
  }
}
