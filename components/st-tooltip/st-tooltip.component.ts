import { Component, Input, ElementRef, Renderer, ChangeDetectorRef, ChangeDetectionStrategy, OnInit, OnDestroy} from '@angular/core';

@Component({
   selector: 'st-tooltip',
   template: require('./st-tooltip.component.html'),
   styles: [require('./st-tooltip.component.scss')],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StTooltip implements OnInit, OnDestroy {

   @Input() text: string = '';
   @Input() showOnClick: boolean;
   @Input() qaTag: string;

   private globalListener: Function;
   private clicked: boolean = false;
   private clickListener: Function;
   private clickInside: boolean;
   constructor(private _elementRef: ElementRef, private renderer: Renderer, private cd: ChangeDetectorRef) {
   }

   ngOnInit(): void {
      this.clickListener = ($event: Event) => {
         this.clickInside = this._elementRef.nativeElement.contains($event.target);
         this.clicked = this.clickInside && !this.clicked;
         this.cd.markForCheck();
      };
      this.globalListener = this.renderer.listenGlobal('document', 'click', this.clickListener);
   }

   ngOnDestroy(): void {
      this.globalListener();
   }

}
