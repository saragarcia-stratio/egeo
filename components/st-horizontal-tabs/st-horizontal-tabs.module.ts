import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StHorizontalTabsComponent } from './../st-horizontal-tabs/st-horizontal-tabs.component';
import { StHorizontalTab } from './st-horizontal-tabs.model';


@NgModule({
   imports: [CommonModule, RouterModule],
   declarations: [StHorizontalTabsComponent],
   exports: [StHorizontalTabsComponent]
})
export class StHorizontalTabsModule {}
