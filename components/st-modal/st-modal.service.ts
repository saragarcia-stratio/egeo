import { Injectable, DynamicComponentLoader, Injector, ComponentRef, ChangeDetectorRef } from '@angular/core';
import { StModal } from './st-modal.component';
import { MessageModal, StMessageModalComponent } from './shared';
import { Observable } from 'rxjs';
import { ModalConfig, ModalTitle } from './modal.model';


const MODAL_ID: string = 'stratio-modal-component';
const DEFAULT_CONFIG: ModalConfig = {
  modalSize: { height: 524, width: 970 },
  title: { backgroundColor: '#f3f3f3', fontSize: 24 }
};

@Injectable()
export class StModalService {

  private header: ModalTitle = { title: 'Default', icon: 'icon-rocket' };
  private modal: ComponentRef<StModal>;
  private _config: ModalConfig = DEFAULT_CONFIG;

  constructor(private _dcl: DynamicComponentLoader, private _injector: Injector, private _cd: ChangeDetectorRef) { }

  set config(config: ModalConfig) {
    this._config = config;
  }

  create(component: any, title: ModalTitle, inputs?: Object, outputs?: Object): Promise<void> {
    inputs = inputs ? inputs : {};
    outputs = outputs ? outputs : {};

    if (!this.modal) {
      this.header = title;
      this.createModalContainer();
      return this._dcl.loadAsRoot(StModal, `#${MODAL_ID}`, this._injector).then(componentRef => this.onLoad(componentRef, component, inputs, outputs));
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

  createConfigAndShow(config: ModalConfig, component: any, title: ModalTitle, inputs?: Object, outputs?: Object): void {
    inputs = inputs !== undefined ? inputs : {};
    outputs = outputs !== undefined ? outputs : {};

    this._config = config;
    this.create(component, title, inputs, outputs).then(
      () => this.show()
    );
  }

  createAndShow(component: any, title: ModalTitle, inputs?: Object, outputs?: Object): void {
    inputs = inputs !== undefined ? inputs : {};
    outputs = outputs !== undefined ? outputs : {};

    this.create(component, title, inputs, outputs).then(
      () => this.show()
    );
  }

  hideAndDestroy(): void {
    this.hide();
    this.destroy();
  }

  /**
   * Example of method to call delete window
   *
   * constructor(private _stModal: StModalService) {  // Injection of modal service
   *    let notify: Subject<BUTTON_TYPES> = new Subject<BUTTON_TYPES>();
   *
   *    // Creation of buttons
   *    let buttonAccept: Buttons = { type: BUTTON_TYPES.ACCEPT, title: 'Delete', notify: notify };
   *    let buttonCancel: Buttons = { type: BUTTON_TYPES.CANCEL, title: 'Cancel', notify: notify };
   *
   *    // Creation of modal info
   *    let messageModal: MessageModal = {
   *    message: 'Are you sure of delete the id 10',
   *      title: {title: 'ARE YOU SURE?', icon: 'icon-info2'},
   *      buttons: [buttonAccept, buttonCancel]
   *    };
   *
   *    // Create modal and suscribe button click
   *    _stModal.createMessageModal(messageModal);
   *    notify.subscribe((type: BUTTON_TYPES) => this.showMessageType(type));
   * }
   *
   * // Next event
   * showMessageType(type: BUTTON_TYPES): void {
   *    switch (type) {
   *      case BUTTON_TYPES.ACCEPT: console.log('ACCEPT'); break;
   *      case BUTTON_TYPES.CANCEL: console.log('CANCEL'); break;
   *      default: console.log('error**************'); break;
   *    }
   * }
   *
   * // Show modal after creation
   * showModal(): void {
   *    this._stModal.show();
   * }
   *
   */
  createMessageModal(modal: MessageModal): Promise<void> {
    let config: ModalConfig = {
      modalSize: { height: 200, width: 600 },
      title: { backgroundColor: '#f3f3f3', fontSize: 24 }
    };


    this.config = config;
    return this.create(StMessageModalComponent, modal.title, { modal: modal });
  }

  createMessageModalAndShow(modal: MessageModal): void {
    this.createMessageModal(modal)
    .then(() => this.show())
    .catch((e) => console.error(e));
  }

  private createModalContainer(): void {
    let body: HTMLBodyElement = document.getElementsByTagName('body')[0];
    let div: HTMLDivElement = document.createElement('div');
    div.id = MODAL_ID;

    body.appendChild(div);
  }

  private onLoad(componentRef: ComponentRef<StModal>, component: any, inputs: Object, outputs: Object): void {
    this.modal = componentRef;
    componentRef.instance.header = this.header;
    componentRef.instance.visible = false;

    componentRef.instance.component = component;

    componentRef.instance.visibleChange.subscribe((visibility: boolean) => this.onChangeVisibility(visibility));
    componentRef.instance.componentInputs = inputs;
    componentRef.instance.componentOutputs = outputs;

    componentRef.instance.config = this._config;

    componentRef.changeDetectorRef.detectChanges();
  }

  private onChangeVisibility(visibility: boolean): void {
    this.modal.instance.visible = visibility;
    this.modal.changeDetectorRef.detectChanges();
  }
}
