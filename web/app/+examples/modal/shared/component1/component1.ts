import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'component1',
  template: require('./component1.html'),
  styles: [require('./component1.scss')],
  encapsulation: ViewEncapsulation.None
})

export class Component1 { }
