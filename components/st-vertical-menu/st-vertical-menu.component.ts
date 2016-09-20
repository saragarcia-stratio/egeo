import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'st-vertical-menu',
  template: require('./st-vertical-menu.component.html'),
  styles: [require('./st-vertical-menu.component.scss')]
})

export class StVerticalMenuComponent implements OnInit {
  @Input() activeOption: string;
  @Input() options: Array<string>;
  @Input() qaTag: string;
  @Output() changedOption: EventEmitter<any> = new EventEmitter<any>();

  activeOptionIndex: number = 0;
  arrowMovement: number = 39;

  constructor () {
  }

  ngOnInit (): void {
    if ( this.options && this.options.length > 0 && !this.activeOption) {
      this.activateOption( this.options[0], 0);
    }
  }

  isActive (optionName: string): boolean {
    return this.activeOption === optionName;
  }

  activateOption (optionName: string, optionIndex: number): void {
    this.activeOption = optionName;
    this.activeOptionIndex = optionIndex;
    this.changedOption.emit(optionName);
  }
}
