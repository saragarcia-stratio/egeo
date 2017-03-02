import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { StTwoListSelectionComponent } from './st-two-list-selection.component';
import { StTwoListSelectionViewComponent } from './st-two-list-selection.view.component';
import { ListSelectionComponent } from './list-selection/list-selection.component';
import { ListItemComponent } from './list-item/list-item.component';

// Order modules
import { StSearchModule } from '../st-search';
import { PipesModule } from '../pipes';

@NgModule({
   imports: [CommonModule, StSearchModule, PipesModule],
   declarations: [StTwoListSelectionViewComponent, StTwoListSelectionComponent, ListSelectionComponent, ListItemComponent],
   exports: [StTwoListSelectionComponent, StTwoListSelectionViewComponent]
})
export class StTwoListSelectionModule { }
