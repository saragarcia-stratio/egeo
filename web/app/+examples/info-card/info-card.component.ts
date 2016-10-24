import {Component, ViewEncapsulation} from '@angular/core';

@Component({
   selector: 'info-card-example',
   template: require('./info-card.component.html'),
   styles: [require('./info-card.component.scss')],
   encapsulation: ViewEncapsulation.None
})

export class InfoCardComponent {
   constructor() {
   }
}
