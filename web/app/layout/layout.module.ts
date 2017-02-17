import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutComponent } from './layout.component';
import {
   ButtonComponent,
   ChangelogComponent,
   ChangelogService,
   ColorsComponent,
   DropdownComponent,
   DropdownMenuComponent,
   FooterComponent,
   GridComponent,
   IconsComponent,
   InfoBoxComponent,
   InfoCardComponent,
   InputComponent,
   ListComponent,
   LogoComponent,
   MainComponent,
   ModalComponent,
   NavigationModule,
   PageTitleComponent,
   PaginationComponent,
   RegexpComponent,
   SearchComponent,
   SpinnerComponent,
   TabBoxComponent,
   ToggleButtonsComponent,
   TooltipComponent,
   TwoListSelectionComponent,
   TypographyComponent,
   VerticalTabsComponent
} from '../+examples';
import { routing } from './layout.routing';

import { SharedModule } from '../shared';

import { MarkdownToHtmlPipe } from 'markdown-to-html-pipe';

@NgModule({
   imports: [SharedModule, routing, FormsModule, ReactiveFormsModule, NavigationModule],
   declarations: [
      ButtonComponent,
      ChangelogComponent,
      ColorsComponent,
      DropdownComponent,
      DropdownMenuComponent,
      FooterComponent,
      GridComponent,
      IconsComponent,
      InfoBoxComponent,
      InfoCardComponent,
      InputComponent,
      LayoutComponent,
      ListComponent,
      LogoComponent,
      MainComponent,
      MarkdownToHtmlPipe,
      ModalComponent,
      PageTitleComponent,
      PaginationComponent,
      RegexpComponent,
      SearchComponent,
      SpinnerComponent,
      TabBoxComponent,
      ToggleButtonsComponent,
      TooltipComponent,
      TwoListSelectionComponent,
      TypographyComponent,
      VerticalTabsComponent
   ],
   providers: [ChangelogService]
})
export class LayoutModule { }
