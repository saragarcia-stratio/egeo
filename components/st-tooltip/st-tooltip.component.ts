import { Component, Input, ElementRef, Renderer, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
   selector: 'st-tooltip',
   template: require('./st-tooltip.component.html'),
   styles: [require('./st-tooltip.component.scss')],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StTooltip {

   @Input() text: string = '';
   @Input() showOnClick: boolean = false;
   @Input() qaTag: string;

   private globalListener: Array<any> = [];
   private clicked: boolean = false;

   constructor(private _elementRef: ElementRef, private renderer: Renderer, private cd: ChangeDetectorRef) {
   }

   changeTooltipState($event: Event): void {
      $event.stopPropagation();
      this.clicked ? this.closeTooltip() : this.openTooltip();
   }

   openTooltip(): void {
      this.clicked = true;
      this.globalListener[0] = this.renderer.listenGlobal('document', 'click', this.closeTooltip.bind(this));
      this.globalListener[1] = this.renderer.listenGlobal('document', 'keydown', this.closeTooltip.bind(this));
      this.globalListener[2] = this.renderer.listenGlobal('document', 'wheel', this.closeTooltip.bind(this));
   }

   closeTooltip(): void {
      if (this.clicked) {
         this.clicked = false;
      }
      this.globalListener.map((data) => {
         if (this.globalListener) {
            data();
         }
      });
      this.cd.markForCheck();
   }
}
