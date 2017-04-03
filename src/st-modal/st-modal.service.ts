import {
   Injectable,
   ViewContainerRef,
   Type,
   ComponentRef,
   ComponentFactory,
   ComponentFactoryResolver
} from '@angular/core';
import { Subject, Observable } from 'rxjs';

/* local dependencies */
import { StModalType, StModalWidth, StModalConfig, StModalMainTextSize, StModalResponse, StModalButton } from './st-modal.interface';
import { StModal } from './st-modal.component';

@Injectable()
export class StModalService {

   private _containerRef: ViewContainerRef = undefined;
   private dynamicModal: ComponentRef<StModal> = undefined;
   private notifyButtonInteraction: Subject<StModalResponse>;

   constructor(private _cfr: ComponentFactoryResolver) { }

   /* External API */
   set container(container: ViewContainerRef) {
      this._containerRef = container;
   }

   // - Public methods
   show(config: StModalConfig, component?: Type<any>): Observable<StModalResponse> {
      let errors: string[] = this.canCreateModal(config, component);
      if (errors && errors.length > 0) {
         throw new Error(errors.join(' '));
      }
      this.notifyButtonInteraction = new Subject<StModalResponse>();
      this.createModal(this.createConfig(config), component);
      return this.notifyButtonInteraction.asObservable();
   }

   close(): void {
      this.destroy();
      this.notifyButtonInteraction.next(StModalResponse.CLOSE);
      this.notifyButtonInteraction.complete();
   }

   /* INTERNAL METHODS FOR WORK WITH MODALS */
   private createModal(modalConfig: StModalConfig, component?: Type<any>): void {
      let stModalFactory: ComponentFactory<StModal> = this._cfr.resolveComponentFactory(StModal);
      if (stModalFactory) {
         this._containerRef.clear();
         this.dynamicModal = this._containerRef.createComponent<StModal>(stModalFactory);
         this.bindVars(modalConfig, component);
      }
   }

   private destroy(): void {
      if (this.dynamicModal) {
         this.dynamicModal.destroy();
         this.dynamicModal = undefined;
      }
   }

   private bindVars(modalConfig: StModalConfig, component: Type<any>): void {
      this.dynamicModal.instance.component = component;

      this.dynamicModal.instance.close.subscribe((event: MouseEvent) => this.onClose(event));
      this.dynamicModal.instance.click.subscribe((response: StModalResponse) => this.notify(response, modalConfig.closeOnAccept));
      this.dynamicModal.instance.modalConfig = modalConfig;

      this.dynamicModal.changeDetectorRef.detectChanges();
   }

   private onClose(event: MouseEvent): void {
      this.close();
   }

   private notify(response: StModalResponse, closeOnAccept?: boolean): void {
      this.notifyButtonInteraction.next(response);
      if (closeOnAccept && response === StModalResponse.YES) {
         this.close();
      }
   }

   private canCreateModal(config: StModalConfig, component?: Type<any>): string[] {
      let errors: string[] = [];
      if (!this._containerRef) {
         errors.push(`[ERROR]: StModalService => Cant find container, are you sure you declarate in MAIN APP component in html and typescript?`);
      }
      if (this.dynamicModal !== undefined) {
         errors.push(`[ERROR]: StModalService => Can't create modal beacause already exists one. Are you sure that you call close method?)`);
      }
      if (!component && !config.message && !config.html) {
         errors.push(`[ERROR]: StModalService => Can't find message, html or component to show in modal`);
      }
      return errors;
   }

   private createConfig(config: StModalConfig): StModalConfig {
      if (config.qaTag === undefined || config.qaTag.length === 0) {
         throw new Error(`[ERROR]: StModalService => qaTag is a required field`);
      }
      return {
         inputs: config.inputs !== undefined ? config.inputs : {},
         outputs: config.outputs !== undefined ? config.outputs : {},
         modalTitle: config.modalTitle !== undefined && config.modalTitle.length > 0 ? config.modalTitle : 'DEFAULT TITLE',
         modalType: config.modalType !== undefined ? config.modalType : StModalType.NEUTRAL,
         modalWidth: config.modalWidth !== undefined ? config.modalWidth : StModalWidth.COMPACT,
         buttons: config.buttons !== undefined ? config.buttons : [],
         closeOnAccept: config.closeOnAccept !== undefined ? config.closeOnAccept : true,
         mainText: config.mainText !== undefined ? config.mainText : StModalMainTextSize.MEDIUM,
         message: config.message, // Because undefined is a valid value
         html: config.html, // Because undefined is a valid value
         contextualTitle: config.contextualTitle, // Because undefined is a valid value
         qaTag: config.qaTag // Beacuse is required and checked before
      };
   }
}
