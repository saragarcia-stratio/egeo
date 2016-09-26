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

   private globalListener: any;
   private clicked: boolean = false;

   constructor(private _elementRef: ElementRef, private renderer: Renderer, private cd: ChangeDetectorRef) {
  }

  changeTooltipState($event: Event): void {
    $event.stopPropagation();
    this.clicked ? this.closeTooltip() : this.openTooltip();
  }

   openTooltip(): void {
    this.clicked = true;
    this.globalListener = this.renderer.listenGlobal('document', 'click', this.closeTooltip.bind(this));
  }

  closeTooltip(): void {
    if (this.clicked) {
      this.clicked = false;
    }

    if (this.globalListener) {
      this.globalListener();
    }
    this.cd.markForCheck();
  }
}
