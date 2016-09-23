import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'component2',
  template: require('./component2.html'),
  styles: [require('./component2.scss')],
  encapsulation: ViewEncapsulation.None
})

export class Component2 { }
