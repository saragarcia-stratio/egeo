import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StDropdownMenuItemComponent } from './st-dropdown-menu-item/st-dropdown-menu-item.component';
import { StDropdownMenuComponent } from './st-dropdown-menu.component';

@NgModule({
   imports: [CommonModule, BrowserAnimationsModule],
   declarations: [StDropdownMenuComponent, StDropdownMenuItemComponent],
   exports: [StDropdownMenuComponent]
})
export class StDropdownMenuModule { }
