import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StHeaderComponent } from './st-header.component';
import { AppNameComponent, NavigationLinksComponent } from './shared';

@NgModule({
   imports: [CommonModule, RouterModule],
   declarations: [StHeaderComponent, AppNameComponent, NavigationLinksComponent],
   exports: [StHeaderComponent]
})
export class StHeaderModule { }
