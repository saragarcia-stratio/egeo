import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { StDropdownMenuModule } from '../st-dropdown-menu';

import StDropdownComponent from './st-dropdown.component';

@NgModule({
   imports: [ CommonModule, StDropdownMenuModule ],
   declarations: [ StDropdownComponent ],
   exports: [ StDropdownComponent ]
})
export class StDropdownModule {
}
