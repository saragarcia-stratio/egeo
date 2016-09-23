import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'tooltip-example',
  template: require('./tooltip.component.html'),
  styles: [require('./tooltip.component.scss')],
  encapsulation: ViewEncapsulation.None
})

export class TooltipComponent {

}
