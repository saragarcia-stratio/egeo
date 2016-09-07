import { Injectable } from '@angular/core';
import { ComponentRef, Compiler, ViewChild, ViewContainerRef, ComponentFactory} from '@angular/core';
import { Observable } from 'rxjs';
import { StModal } from './st-modal.component';
import { MessageModal, StMessageModalComponent } from './shared';
import { ModalConfig, ModalTitle } from './modal.model';


const MODAL_ID: string = 'stratio-modal-component';
const DEFAULT_CONFIG: ModalConfig = {
  modalSize: { height: 524, width: 970 },
  title: { backgroundColor: '#f3f3f3', fontSize: 24 },
  destroyOnCLose: true
};

@Injectable()
export class StModalService {

  private header: ModalTitle = { title: 'Default', icon: 'icon-rocket' };
  private modal: ComponentRef<StModal>;
  private _config: ModalConfig = DEFAULT_CONFIG;
  private _containerRef: ViewContainerRef;

  constructor(private _compiler: Compiler) {

  }

  set config(config: ModalConfig) {
    this._config = config;
  }

  create(target: ViewContainerRef, component: any, title: ModalTitle, inputs?: Object, outputs?: Object): Promise<void> {
    inputs = inputs ? inputs : {};
    outputs = outputs ? outputs : {};

    if (!this.modal) {
      this._config = this._config ? this._config : DEFAULT_CONFIG;
      this._config.destroyOnCLose = this._config.destroyOnCLose !== undefined ? this._config.destroyOnCLose : true;
      this.header = title;
      // TODO: Find alternative way to compile dinamically with RC6
      // return this._compiler.compileComponentAsync(StModal).then((factory: ComponentFactory<any>) => {
      //   this.modal = target.createComponent(factory);
      //   this.onLoad(component, inputs, outputs);
      // });
    }
    return undefined;
  }

  show(): void {
    if (this.modal) {
      this.modal.instance.visible = true;
      this.modal.changeDetectorRef.detectChanges();
    }
  }

  hide(): void {
    if (this.modal) {
      this.modal.instance.visible = false;
      this.modal.changeDetectorRef.detectChanges();
    }
  }

  destroy(): void {
    if (this.modal) {
      this.modal.destroy();
      this.modal = undefined;
    }
  }

  createConfigAndShow(target: ViewContainerRef, config: ModalConfig, component: any, title: ModalTitle, inputs?: Object, outputs?: Object): void {
    inputs = inputs !== undefined ? inputs : {};
    outputs = outputs !== undefined ? outputs : {};
    config = config !== undefined ? config : DEFAULT_CONFIG;

    this._config = config;
    this.create(target, component, title, inputs, outputs).then(
      () => this.show()
    );
  }

  createAndShow(target: ViewContainerRef, component: any, title: ModalTitle, inputs?: Object, outputs?: Object): void {
    inputs = inputs !== undefined ? inputs : {};
    outputs = outputs !== undefined ? outputs : {};
    this._config = DEFAULT_CONFIG;

    this.create(target, component, title, inputs, outputs).then(
      () => this.show()
    );
  }

  hideAndDestroy(): void {
    this.hide();
    this.destroy();
  }

  createMessageModal(target: ViewContainerRef, modal: MessageModal): Promise<void> {
    let config: ModalConfig = {
      modalSize: { height: 200, width: 600 },
      title: { backgroundColor: '#f3f3f3', fontSize: 24 },
      destroyOnCLose: true
    };


    this.config = config;
    return this.create(target, StMessageModalComponent, modal.title, { modal: modal });
  }

  createMessageModalAndShow(target: ViewContainerRef, modal: MessageModal): void {
    this.createMessageModal(target, modal)
      .then(() => this.show())
      .catch((e) => console.error(e));
  }

  set viewContainterRef(containerRef: ViewContainerRef) {
    this._containerRef = containerRef;
  }

  private onLoad(component: any, inputs: Object, outputs: Object): void {
    this.modal.instance.header = this.header;
    this.modal.instance.visible = false;

    this.modal.instance.component = component;

    this.modal.instance.visibleChange.subscribe((visibility: boolean) => this.onChangeVisibility(visibility));
    this.modal.instance.componentInputs = inputs;
    this.modal.instance.componentOutputs = outputs;

    this.modal.instance.config = this._config;

    this.modal.changeDetectorRef.detectChanges();
  }

  private onChangeVisibility(visibility: boolean): void {
    if (this._config && this._config.destroyOnCLose) {
      this.hideAndDestroy();
    } else if (this._config) {
      this.hide();
    }
  }
}
