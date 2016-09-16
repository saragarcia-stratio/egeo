import { Injectable } from '@angular/core';
import {
  ComponentRef,
  Compiler,
  ViewChild,
  ViewContainerRef,
  ComponentFactory,
  NgModule,
  Type,
  ReflectiveInjector,
  Inject
} from '@angular/core';
import { Observable } from 'rxjs';
import { StModal } from './st-modal.component';
import { MessageModal, StMessageModalComponent } from './shared';
import { ModalConfig, ModalTitle } from './modal.model';
import { COMPONENT_OUTLET_MODULE } from './provider';


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

  private moduleType: any;

  constructor(
    @Inject(COMPONENT_OUTLET_MODULE) private moduleMeta: any,
    private _compiler: Compiler
  ) { }

  set config(config: ModalConfig) {
    this._config = config;
  }

  create(target: ViewContainerRef, component: any, componentSelector: string, title: ModalTitle, inputs?: Object, outputs?: Object): Promise<void> {
    inputs = inputs ? inputs : {};
    outputs = outputs ? outputs : {};

    if (!this.modal) {
      this._config = this._config ? this._config : DEFAULT_CONFIG;
      this._config.destroyOnCLose = this._config.destroyOnCLose !== undefined ? this._config.destroyOnCLose : true;
      this.header = title;

      this.moduleType = this._createDynamicModule(StModal, component);
      const injector = ReflectiveInjector.fromResolvedProviders([], target.parentInjector);
      return this._compiler.compileModuleAndAllComponentsAsync<any>(this.moduleType)
        .then(moduleFactory => {
          let factories: ComponentFactory<any>[] = moduleFactory.componentFactories;
          let stModalFactory: ComponentFactory<StModal> = factories.find(factory => factory.selector === 'st-modal');
          let otherFactory: ComponentFactory<any> = factories.find(factory => factory.selector === componentSelector);
          if (stModalFactory) {
            target.clear();
            this.modal = target.createComponent<StModal>(stModalFactory, 0, injector);
            this.onLoad(component, inputs, outputs, otherFactory, injector);
          }
        });
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

  createConfigAndShow(
    target: ViewContainerRef, config: ModalConfig, component: any, componentSelector: string, title: ModalTitle, inputs?: Object, outputs?: Object
  ): void {
    inputs = inputs !== undefined ? inputs : {};
    outputs = outputs !== undefined ? outputs : {};
    config = config !== undefined ? config : DEFAULT_CONFIG;

    this._config = config;
    this.create(target, component, componentSelector, title, inputs, outputs).then(
      () => this.show()
    );
  }

  createAndShow(target: ViewContainerRef, component: any, componentSelector: string, title: ModalTitle, inputs?: Object, outputs?: Object): void {
    inputs = inputs !== undefined ? inputs : {};
    outputs = outputs !== undefined ? outputs : {};
    this._config = DEFAULT_CONFIG;

    this.create(target, component, componentSelector, title, inputs, outputs).then(
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
    return this.create(target, StMessageModalComponent, 'stratio-message-modal', modal.title, { modal: modal });
  }

  createMessageModalAndShow(target: ViewContainerRef, modal: MessageModal): void {
    this.createMessageModal(target, modal)
      .then(() => this.show())
      .catch((e) => console.error(e));
  }

  set viewContainterRef(containerRef: ViewContainerRef) {
    this._containerRef = containerRef;
  }

  private onLoad(component: any, inputs: Object, outputs: Object, otherFactory: ComponentFactory<any>, injector: ReflectiveInjector): void {
    this.modal.instance.header = this.header;
    this.modal.instance.visible = false;

    this.modal.instance.component = component;
    this.modal.instance.componentFactory = otherFactory;
    this.modal.instance.componentInjector = injector;

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

  private _createDynamicModule(componentStModalType: Type<any>, componentType: Type<any>): any {
    const declarations = this.moduleMeta.declarations || [];
    declarations.push(componentStModalType);
    declarations.push(componentType);
    const moduleMeta: NgModule = {
      imports: this.moduleMeta.imports,
      providers: this.moduleMeta.providers,
      declarations: declarations
    };
    return NgModule(moduleMeta)(class _ { });
  }
}
