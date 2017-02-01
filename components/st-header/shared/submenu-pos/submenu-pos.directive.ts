import { Directive, ElementRef, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({ selector: '[submenuPos]' })

export class SubmenuPosDirective implements OnChanges {

   @Input() submenuPosIsActive: boolean;
   @Output() positionChange: EventEmitter<number> = new EventEmitter<number>();

   constructor(private el: ElementRef) { }

   ngOnInit(): void {
      if (this.submenuPosIsActive) {
         this.positionChange.emit(this.el.nativeElement.getBoundingClientRect().left);
      }
   }

   ngOnChanges(): void {
      if (this.submenuPosIsActive) {
         this.positionChange.emit(this.el.nativeElement.getBoundingClientRect().left);
      }
   }
}
