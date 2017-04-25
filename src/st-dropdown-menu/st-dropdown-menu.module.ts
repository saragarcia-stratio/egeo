import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StDropdownMenuItemComponent } from './components';
import { StDropdownMenuComponent } from './st-dropdown-menu.component';

@NgModule({
   imports: [CommonModule, BrowserAnimationsModule],
   declarations: [StDropdownMenuComponent, StDropdownMenuItemComponent],
   exports: [StDropdownMenuComponent]
})
export class StDropdownMenuModule { }
