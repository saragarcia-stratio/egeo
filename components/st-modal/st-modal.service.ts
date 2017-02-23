import {
   Injectable,
   ViewContainerRef,
   Type,
   NgModule,
   ComponentRef,
   ReflectiveInjector,
   ComponentFactory,
   ModuleWithComponentFactories,
   ComponentFactoryResolver
} from '@angular/core';

import { CommonModule } from '@angular/common';

/* local dependencies */
import { StModalConfiguration } from './modal.model';
import { StModal } from './st-modal.component';
import { MessageModal, StMessageModalComponent } from './shared';
import { StModalModule } from './st-modal.module';

@Injectable()
export class StModalService {

   private _containerRef: ViewContainerRef = undefined;
   private _config: StModalConfiguration = new StModalConfiguration();


   private dynamicModal: ComponentRef<StModal> = undefined;
   private dynamicModule: Type<any>;

   constructor(private _cfr: ComponentFactoryResolver) { }

   /* External API */
   set container(container: ViewContainerRef) {
      this._containerRef = container;
   }

   set configuration(config: StModalConfiguration) {
      this._config = config;
   }

   // - Generic methods
   show(components: Type<any>[], modules: Type<any>[], mainComponent?: Type<any>, mainModule?: Type<any>): void {
      this.createModal(components, modules, mainComponent, mainModule);
   }

   close(): void {
      this.destroy();
   }

   // - Message modal simplified methods
   showMessage(messageModal: MessageModal): void {
      this._config = new StModalConfiguration();
      this._config.setTitle(messageModal.title);
      this._config.modalHeight = 200;
      this._config.modalWidth = 600;
      this._config.setTitleConfig({ fontSize: 24, backgroundColor: '#f3f3f3' });
      this._config.inputs = { modal: messageModal };

      this.createModal([], []);
   }

   /* INTERNAL METHODS FOR WORK WITH MODALS */
   private createModal(components: Type<any>[], modules: Type<any>[], mainComponent?: Type<any>, mainModule?: Type<any>): void {
      let mainCom: Type<any> = this.getMainComponent(components, mainComponent);

      if (this.canCreateModal(mainCom)) {

         this.dynamicModule = mainModule ? mainModule : this.createInternalModule(components, modules);
         // const injector: ReflectiveInjector = ReflectiveInjector.fromResolvedProviders([], this._containerRef.parentInjector);

         let stModalFactory: ComponentFactory<StModal> = this._cfr.resolveComponentFactory(StModal);
         if (stModalFactory) {
            this._containerRef.clear();
            this.dynamicModal = this._containerRef.createComponent<StModal>(stModalFactory);
            this.bindVars(mainCom);
         }


         // return this.(this.dynamicModule)
         //    .then(moduleFactory => {
         //       let factories: ComponentFactory<any>[] = moduleFactory.componentFactories;
         //       let stModalFactory: ComponentFactory<StModal> = factories.find(factory => factory.componentType === StModal);
         //       let otherFactory: ComponentFactory<any> = factories.find(factory => factory.componentType === mainCom);
         //       if (stModalFactory) {
         //          this._containerRef.clear();
         //          this.dynamicModal = this._containerRef.createComponent<StModal>(stModalFactory, 0, injector);
         //          this.bindVars(mainCom, otherFactory, injector);
         //       }
         //    });
      } else {
         throw new Error('Can\'t create modal');
      }
      // return new Promise<void>((resolve, reject) => {
      //    reject(new Error('Can\'t create modal'));
      // });
   }

   private getMainComponent(components: Type<any>[], mainComponent?: Type<any>): Type<any> {
      let main: Type<any> = undefined;

      if (mainComponent) {
         main = mainComponent;
      } else if (components && components.length > 0) {
         main = components[0];
      } else {
         main = StMessageModalComponent;
      }
      return main;
   }

   private destroy(): void {
      if (this.dynamicModal) {
         this.dynamicModal.destroy();
         this.dynamicModal = undefined;
      }
      // if (this._compiler) {
      //    this._compiler.clearCache();
      // }
   }

   private createInternalModule(components: Type<any>[], modules: Type<any>[]): Type<any> {
      const moduleMeta: NgModule = {
         imports: this.buildList(modules, [CommonModule, StModalModule]),
         declarations: this.buildList(components, []),
         providers: []
      };
      return NgModule(moduleMeta)(class _egeoDynamicModule { });
   }

   private buildList(typeArray: Type<any>[], element: Type<any>[]): Type<any>[] {
      let final: Type<any>[] = element;
      for (let i = 0; i < typeArray.length; i++) {
         final.push(typeArray[i]);
      }
      return final;
   }

   private bindVars(component: Type<any>): void {
      this.dynamicModal.instance.component = component;
      // this.dynamicModal.instance.componentFactory = otherFactory;
      // this.dynamicModal.instance.componentInjector = injector;

      this.dynamicModal.instance.visibleChange.subscribe((close: boolean) => this.onModalClose(close));
      this.dynamicModal.instance.componentInputs = this._config.inputs;
      this.dynamicModal.instance.componentOutputs = this._config.outputs;


      this.dynamicModal.instance.config = this._config;

      this.dynamicModal.changeDetectorRef.detectChanges();
   }

   private onModalClose(close: boolean): void {
      this.destroy();
   }

   private canCreateModal(mainComponent: Type<any>): boolean {
      if (!this._containerRef) {
         console.error('cant find container, are you sure you declarate in app main component?');
      }

      if (!this._config) {
         console.error('cant find modal configuration');
      }

      if (this.dynamicModal !== undefined) {
         console.error('can\'t create modal beacause already exists');
      }

      // if (!this._compiler) {
      //    console.error('can\'t find compiler');
      // }

      if (!mainComponent) {
         console.error('can\'t find main component');
      }

      return this._containerRef !== undefined && this._config !== undefined &&
         this.dynamicModal === undefined && mainComponent !== undefined;
   }
}
