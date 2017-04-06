import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { StDropdownMenuModule } from '../st-dropdown-menu';

import { StDropdownComponent } from './st-dropdown.component';

@NgModule({
   imports: [CommonModule, StDropdownMenuModule],
   declarations: [StDropdownComponent],
   exports: [StDropdownComponent]
})
export class StDropdownModule {
}
