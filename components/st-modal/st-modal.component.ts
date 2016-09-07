import { Component, Input, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ComponentRef, Compiler, ViewChild, ViewContainerRef, ComponentFactory} from '@angular/core';
import { ModalConfig, ModalTitle } from './modal.model';

@Component({
  selector: 'st-modal',
  template: require('./st-modal.component.html'),
  styles: [require('./st-modal.component.scss')]
})
export class StModal implements OnDestroy, OnInit {
  @Input() config: ModalConfig;
  @Input() header: ModalTitle;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() component: any;
  @Input() componentInputs: Object;
  @Input() componentOutputs: Object;

  @ViewChild('stModalBody', { read: ViewContainerRef }) target: any;
  private componentRef: ComponentRef<any>;

  constructor(private compiler: Compiler) { }

  get ngClassConfig(): { [className: string]: boolean } {
    return {
      'st-modal--visible': this.visible,
      'st-modal--invisible': !this.visible
    };
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

  closeModal(): void {
    this.visibleChange.emit(true);
  }

  bindModalInputs(): void {
    for (let key in this.componentInputs) {
      if (this.componentInputs.hasOwnProperty(key)) {
        this.componentRef.instance[key] = this.componentInputs[key];
      }
    }

    for (let key in this.componentOutputs) {
      if (this.componentOutputs.hasOwnProperty(key)) {
        this.componentRef.instance[key].subscribe(this.componentOutputs[key]);
      }
    }
    this.componentRef.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
    this.createModal();
  }

  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  private createModal(): void {
    if (!this.componentRef) {
      // TODO: Find alternative way to compile dinamically with RC6
      /*this.compiler.compileComponentAsync(this.component).then(
        factory => {
          this.componentRef = this.target.createComponent(factory);
          this.bindModalInputs();
        }
      );*/
    }
  }
}
