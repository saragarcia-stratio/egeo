import {
   Component,
   ComponentRef,
   Input,
   ViewContainerRef,
   ReflectiveInjector,
   Output,
   EventEmitter,
   ViewChild,
   OnDestroy,
   OnInit
} from '@angular/core';

import { StModalConfiguration } from './modal.model';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
   selector: 'st-modal',
   templateUrl: './st-modal.component.html',
   styleUrls: ['./st-modal.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StModal implements OnDestroy, OnInit {
   @Input() config: StModalConfiguration;
   @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

   @Input() component: any;
   @Input() componentInputs: Object;
   @Input() componentOutputs: Object;
   @Input() componentSelector: String;

   @Input() componentFactory: any;
   @Input() componentInjector: ReflectiveInjector;
   @Input() qaTag: string;

   @ViewChild('stModalBody', { read: ViewContainerRef }) target: ViewContainerRef;

   private componentRef: ComponentRef<any>;
   private moduleType: any;

   constructor() { }

   getModalSize(): Object {
      if (this.config) {
         return { width: this.config.modalWidth + 'px', 'min-height': this.config.modalHeight + 'px' };
      } else {
         return {};
      }
   }

   getTitleStyles(): Object {
      if (this.config) {
         return { 'background-color': this.config.titleConfig.backgroundColor, 'font-size': this.config.titleConfig.fontSize + 'px' };
      } else {
         return {};
      }
   }

   getIconLineHeight(): Object {
      if (this.config) {
         return { 'line-height': this.config.titleConfig.fontSize + 'px' };
      } else {
         return {};
      }
   }

   closeModal(): void {
      this.visibleChange.emit(true);
   }

   ngOnInit(): void {
      this.loadBody();
   }

   ngOnDestroy(): void {
      if (this.componentRef) {
         this.componentRef.destroy();
      }
   }

   hasIcon(): boolean {
      return this.config.title.icon !== undefined && this.config.title.icon !== '';
   }

   private loadBody(): void {
      if (!this.componentRef) {
         this.target.clear();
         this.componentRef = this.target.createComponent(this.componentFactory, 0, this.componentInjector);
         this.bindModalInputs();
      }
   }

   private bindModalInputs(): void {
      for (let key in this.componentInputs) {
         if (this.componentInputs.hasOwnProperty(key)) {
            this.componentRef.instance[key] = (<any>this.componentInputs)[key];
         }
      }

      for (let key in this.componentOutputs) {
         if (this.componentOutputs.hasOwnProperty(key)) {
            this.componentRef.instance[key].subscribe((<any>this.componentOutputs)[key]);
         }
      }
      this.componentRef.changeDetectorRef.detectChanges();
   }
}
