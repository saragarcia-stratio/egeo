import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { StDropdownMenuItemComponent } from './components';
import { StDropdownMenuComponent } from './st-dropdown-menu.component';

@NgModule({
   imports: [CommonModule],
   declarations: [StDropdownMenuComponent, StDropdownMenuItemComponent],
   exports: [StDropdownMenuComponent]
})
export class StDropdownMenuModule { }
