import { Component, Input, Output, EventEmitter, OnInit, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Menu, SubMenu } from './shared';

@Component({
  selector: 'st-header-menu',
  styles: [require('./st-header-menu.component.scss')],
  template: require('./st-header-menu.component.html')
})
export class StHeaderMenuComponent implements OnInit {
  @Input() externalNavigation: BehaviorSubject<string>;
  @Input() menuOptions: Array<Menu> = [];
  @Input() username: string;
  @Input() helpUrl: string;
  @Output() notifyHasSubMenu: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() selectOption: EventEmitter<string> = new EventEmitter<string>();

  activeMenu: Menu;
  activeSubMenu: SubMenu;
  submenuOffset: string;

  constructor(private _elementRef: ElementRef) { }

  goToExternalURL(): void {
    window.open(this.helpUrl, '_blank');
  }

  navigate(id: string): void {
    this.selectMenu(id);
    this.selectOption.emit(id);
  }

  ngOnInit(): void {
    this.externalNavigation.subscribe(
      (id) => this.selectMenu(id)
    );
  }

  // Find menu or submenu to activate
  private selectMenu(id: string): void {
    this.activeMenu = undefined;
    this.activeSubMenu = undefined;

    for (let index = 0; index < this.menuOptions.length; index++) {
      if (this.menuOptions[index].id === id) {
        this.activeMenu = this.menuOptions[index];
      } else if (this.menuOptions[index].subMenu) {
        this.activeSubMenu = this.menuOptions[index].subMenu.find((submenu) => submenu.id === id);
        if (this.activeSubMenu) {
          this.activeMenu = this.menuOptions[index];
        }
      }
      if (this.activeMenu) {
        break;
      }
    }
    this.checkSubMenu();
    window.setTimeout(() => this.repositionSubmenu(), 0);
  }

  // If we have menu active but no submenu and are submenus, select the first available
  private checkSubMenu(): void {
    if (!this.activeSubMenu && this.activeMenu && this.activeMenu.subMenu && this.activeMenu.subMenu.length > 0) {
      this.activeSubMenu = this.activeMenu.subMenu[0];
    }
    this.notifyHasSubMenu.emit(this.activeSubMenu !== undefined);
  }

  private repositionSubmenu(): void {
    if (this.activeSubMenu) {
      let elements: HTMLElement[] = this._elementRef.nativeElement.getElementsByClassName('st-header__list-element');
      for (let index = 0; index < elements.length; index++) {
        if (elements[index].id === this.activeMenu.id) {
          this.submenuOffset = elements[index].getBoundingClientRect().left + 'px';
        }
      }
    }
  }
}
