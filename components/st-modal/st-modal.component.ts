import {Component, Input, Output, EventEmitter, DynamicComponentLoader, Injector, OnInit, ComponentRef} from '@angular/core';
import { ModalConfig, ModalTitle } from './modal.model';

@Component({
  selector: 'st-modal',
  template: require('./st-modal.component.html'),
  styles: [require('./st-modal.component.scss')]
})
export class StModal implements OnInit {
  @Input() config: ModalConfig;
  @Input() header: ModalTitle;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() component: any;
  @Input() componentInputs: Object;
  @Input() componentOutputs: Object;

  constructor(private _dcl: DynamicComponentLoader, private _injector: Injector) { }

  get ngClassConfig(): { [className: string]: boolean } {
    return {
      'st-modal--visible': this.visible,
      'st-modal--invisible': !this.visible
    };
  }

  ngOnInit(): void {
    this._dcl.loadAsRoot(this.component, '#st-modal--body', this._injector).then(componentRef => this.bindModalInputs(componentRef));
  }

  getModalSize(): Object {
    if (this.config) {
      return { width: this.config.modalSize.width + 'px', 'min-height': this.config.modalSize.height + 'px' };
    } else {
      return {};
    }
  }

  getTitleStyles(): Object {
    if (this.config) {
      return { 'background-color': this.config.title.backgroundColor, 'font-size': this.config.title.fontSize + 'px' };
    } else {
      return {};
    }
  }

  getIconLineHeight(): Object {
     if (this.config) {
      return { 'line-height': this.config.title.fontSize + 'px' };
    } else {
      return {};
    }
  }

  bindModalInputs(componentRef: ComponentRef<any>): void {
    for (let key in this.componentInputs) {
      if (this.componentInputs.hasOwnProperty(key)) {
        componentRef.instance[key] = this.componentInputs[key];
      }
    }

    for (let key in this.componentOutputs) {
      if (this.componentOutputs.hasOwnProperty(key)) {
        componentRef.instance[key].subscribe(this.componentOutputs[key]);
      }
    }
    componentRef.changeDetectorRef.detectChanges();
  }
}
