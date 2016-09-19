import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { StModificableListElement, StListModifierObject } from './shared/element.model';

@Component({
  selector: 'st-modificable-list',
  template: require('./st-modificable-list.component.html'),
  styles: [require('./st-modificable-list.component.scss')],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StModificableListComponent {

  @Input() completeList: Array<StModificableListElement> = new Array<StModificableListElement>();
  @Input() selectedList: Array<StModificableListElement> = new Array<StModificableListElement>();
  @Output() listModifier: EventEmitter<StListModifierObject> = new EventEmitter<StListModifierObject>();
  @Output() changeCompleteSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() changeSelectedSearch: EventEmitter<string> = new EventEmitter<string>();
  @Input() editable: boolean;
  @Input() completeListTitle: string;
  @Input() selectedListTitle: string;
  @Input() searchButtonLabel: string;
  @Input() qaTag: string;

  private completeSearchText: string;
  private selectedSearchText: string;

  private listToAdd: Array<StModificableListElement> = new Array<StModificableListElement>();
  private listToRemove: Array<StModificableListElement> = new Array<StModificableListElement>();

  constructor() { }

  markElement(row: StModificableListElement, toAdd: boolean): void {
    if (toAdd) {
      let rowToFind: Array<StModificableListElement> = this.listToAdd.filter((rowOfArray) => row.id === rowOfArray.id);
      if (rowToFind.length > 0) {
        this.listToAdd = this.listToAdd.filter((rowOfArray) => rowOfArray.id !== rowToFind[0].id);
      } else {
        this.listToAdd.push(row);
      }
    } else {
      let rowToFind: Array<StModificableListElement> = this.listToRemove.filter((rowOfArray) => row.id === rowOfArray.id);
      if (rowToFind.length > 0) {
        this.listToRemove = this.listToRemove.filter((rowOfArray) => rowOfArray.id !== rowToFind[0].id);
      } else {
        this.listToRemove.push(row);
      }
    }
  }

  modifyList(actionToAdd: boolean): void {
    let list: Array<StModificableListElement>;
    if (actionToAdd) {
      list = this.listToAdd;
    } else {
      list = this.listToRemove;
    }
    if (list.length > 0) {
      this.listModifier.emit({ actionToAdd: actionToAdd, list: list });
    }
    if (actionToAdd) {
      this.listToAdd = new Array<StModificableListElement>();
    } else {
      list = this.listToRemove = new Array<StModificableListElement>();
    }
    this.completeSearchText = '';
    this.selectedSearchText = '';
  }

  searchInCompleteList(text: string): void {
    this.completeSearchText = text;
    this.changeCompleteSearch.emit(this.completeSearchText);
  }

  searchInSelectedList(text: string): void {
    this.selectedSearchText = text;
    this.changeSelectedSearch.emit(this.selectedSearchText);
  }
}

