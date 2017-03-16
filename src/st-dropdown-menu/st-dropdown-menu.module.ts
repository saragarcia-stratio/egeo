import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StDropdownMenuComponent } from './st-dropdown-menu.component';
import { StDropdownMenuItemComponent } from './components';

@NgModule({
   imports: [CommonModule],
   declarations: [StDropdownMenuComponent, StDropdownMenuItemComponent],
   exports: [StDropdownMenuComponent]
})
export class StDropdownMenuModule { }
