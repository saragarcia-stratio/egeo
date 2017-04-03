import { Component, ViewChild, ViewContainerRef, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { StModalService } from '../st-modal.service';
import { StModalType, StModalButton, StModalMainTextSize, StModalWidth, StModalResponse } from '../st-modal.interface';
import { ModalTestComponent } from './modal-test.component';

@Component({
   selector: 'st-demo',
   encapsulation: ViewEncapsulation.None,
   styleUrls: ['example.component.scss'],
   template: `
   <div #loadModal></div>
   <div class="st-live-example">
      <h1 class="st-live-example-title">Modals by type of content:</h1>
      <st-button (onClick)="showModal()" text="Simple Message Modal" qaTag="modal-button-1"></st-button>
      <st-button (onClick)="showModalWithHtml()" text="Modal with HTML" qaTag="modal-button-2"></st-button>
      <st-button (onClick)="showModalWithComponent()" text="Modal with component" qaTag="modal-button-3"></st-button>

      <br><br>
      <h1 class="st-live-example-title">Modals by size:</h1>
      <st-button (onClick)="showModalBySize('compact')" text="Compact Modal" qaTag="modal-button-4"></st-button>
      <st-button (onClick)="showModalBySize('regular')" text="Regular Modal" qaTag="modal-button-5"></st-button>
      <st-button (onClick)="showModalBySize('large')" text="Large Modal" qaTag="modal-button-6"></st-button>
   </div>
`
})

export class ExampleComponent implements OnInit {
   @ViewChild('loadModal', { read: ViewContainerRef }) target: ViewContainerRef;

   private buttons: StModalButton[] = [
      { icon: 'icon-trash', iconLeft: true, label: 'Delete', primary: true, response: StModalResponse.YES },
      { icon: 'icon-circle-cross', iconLeft: true, label: 'Cancel', response: StModalResponse.NO }
   ];

   constructor(private _modalService: StModalService) { }

   ngOnInit(): void {
      this._modalService.container = this.target;
   }

   showModal(): void {

      let message: string = 'Are you sure of delete this?';

      this._modalService.show({
         qaTag: 'tag-message',
         modalTitle: 'Delete item',
         buttons: this.buttons,
         message: message,
         mainText: StModalMainTextSize.BIG,
         modalType: StModalType.WARNING
      }).subscribe((response) => console.log(this.evaluateResponse(response)));
   }

   showModalWithHtml(): void {
      let html: string = `
      <h1 class="st-modal-example-test-class-h1">Main title<h1>
      <br>
      <p>paragraph of some text between p html tags, and now a list:</p>
      <br>
      <div>
         <ul class="st-modal-example-test-class-list">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
         </ul>
      </div>
      `;

      this._modalService.show({
         qaTag: 'tag-html',
         modalTitle: 'With HTML',
         buttons: this.buttons,
         html: html,
         mainText: StModalMainTextSize.MEDIUM,
         modalType: StModalType.INFO,
         contextualTitle: 'VALIDATION STATUS'
      }).subscribe((response) => console.log(this.evaluateResponse(response)));
   }

   showModalWithComponent(): void {
      this._modalService.show(
         {
            qaTag: 'tag-complex',
            modalTitle: 'With component',
            buttons: this.buttons,
            modalType: StModalType.NEUTRAL,
            contextualTitle: 'CONTEXTUAL TITLE'
         },
         ModalTestComponent
      ).subscribe((response) => console.log(this.evaluateResponse(response)));
   }

   showModalBySize(size: string): void {
      let width: StModalWidth = StModalWidth.COMPACT;
      if (size === 'compact') {
         width = StModalWidth.COMPACT;
      } else if (size === 'regular') {
         width = StModalWidth.REGULAR;
      } else if (size === 'large') {
         width = StModalWidth.LARGE;
      }

      let message: string = 'Are you sure of delete this?';

      this._modalService.show({
         qaTag: 'tag-' + size,
         modalTitle: size,
         buttons: this.buttons,
         message: message,
         mainText: StModalMainTextSize.BIG,
         modalType: StModalType.INFO,
         modalWidth: width
      }).subscribe((response) => console.log(this.evaluateResponse(response)));
   }

   private evaluateResponse(response: StModalResponse): string {
      switch (response) {
         case StModalResponse.YES: return 'YES';
         case StModalResponse.NO: return 'NO';
         case StModalResponse.CLOSE: return 'CLOSE';
         default: return 'Error response not found';
      }
   }
}

