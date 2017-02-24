import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EgeoModule } from 'egeo';
import { ApiDocComponent, ParametersTableComponent } from './api-doc';
import { LoadCodeComponent } from './load-code';

@NgModule({
   imports: [CommonModule, EgeoModule],
   declarations: [
      LoadCodeComponent,
      ApiDocComponent,
      ParametersTableComponent
   ],
   exports: [CommonModule, LoadCodeComponent, ApiDocComponent, EgeoModule]
})
export class SharedModule { }
