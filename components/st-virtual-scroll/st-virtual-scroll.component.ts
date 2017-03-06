import {
   Component,
   ElementRef,
   EventEmitter,
   Input,
   OnChanges,
   OnDestroy,
   OnInit,
   Output,
   Renderer,
   SimpleChanges,
   ViewChild
} from '@angular/core';

@Component({
   selector: 'st-virtual-scroll',
   templateUrl: './st-virtual-scroll.component.html',
   styleUrls: ['./st-virtual-scroll.component.scss']
})
export class VirtualScrollComponent implements OnInit, OnDestroy, OnChanges {

   @Input() list: Array<any> = [];
   @Input() itemsHeight: number;

   @Output() update: EventEmitter<any[]> = new EventEmitter<any[]>();
   @Output() firstElement: EventEmitter<number> = new EventEmitter<number>();
   @ViewChild('scrollable', { read: ElementRef }) contentElementRef: ElementRef;

   onScrollListener: Function;

   private firstItem: number;
   private lastItem: number;

   constructor(private element: ElementRef, private renderer: Renderer) { }

   ngOnInit(): void {
      this.onScrollListener = this.renderer.listen(this.element.nativeElement, 'scroll', this.refresh.bind(this));
   }

   ngOnChanges(changes: SimpleChanges): void {
      this.refresh();
   }

   ngOnDestroy(): void {
      this.onScrollListener();
   }

   refresh(): void {
      requestAnimationFrame(this.calculateItems.bind(this));
   }

   getStyle(): Object {
      return {
         'padding-top': `${this.getPaddingTop()}px`,
         'padding-bottom': `${this.getPaddingBottom()}px`
      };
   }

   private calculateItems(): void {
      let itemsToShow: number = this.getNumberOfItems();
      this.calculateFirstElementToShow();
      this.lastItem = this.firstItem + itemsToShow;
      this.update.emit(this.list.slice(this.firstItem, this.lastItem));
      this.firstElement.emit(this.firstItem);
   }

   private getNumberOfItems(): number {
      let totalItems: number = 0;
      if (this.contentElementRef && this.contentElementRef.nativeElement) {
         let containerHeight: number = this.contentElementRef.nativeElement.getBoundingClientRect().height;
          totalItems = Math.floor(containerHeight / this.itemsHeight) + 1;
      }
      return Math.max(1, totalItems);
   }

   private calculateFirstElementToShow(): void {
      this.firstItem = Math.floor(this.element.nativeElement.scrollTop / this.itemsHeight);
   }

   private getTotalScrollHeight(): number {
      return this.itemsHeight * this.list.length + 1;
   }

   private getPaddingTop(): number {
      return this.itemsHeight * (this.firstItem);
   }

   private getPaddingBottom(): number {
      return this.itemsHeight * (this.list.length - this.lastItem);
   }
}
