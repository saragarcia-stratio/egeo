import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StPopModule } from '../st-pop/st-pop.module';
import { StFormLabelModule } from '../utils/egeo-form/st-form-label/st-form-label.module';
import { StDropdownMenuModule } from '../st-dropdown-menu/st-dropdown-menu.module';
import { StComboboxComponent } from './st-combobox.component';

@NgModule({
   imports: [CommonModule, FormsModule, ReactiveFormsModule, StFormLabelModule, StDropdownMenuModule, StPopModule],
   declarations: [StComboboxComponent],
   exports: [StComboboxComponent]
})
export class StComboboxModule { }
