import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutComponent } from './layout.component';
import {
   ModalComponent,
   MainComponent,
   ColorsComponent,
   TypographyComponent,
   IconsComponent,
   LogoComponent,
   InputComponent,
   ButtonComponent,
   InfoBoxComponent,
   ListComponent,
   SpinnerComponent,
   TwoListSelectionComponent,
   FooterComponent,
   InfoCardComponent,
   TooltipComponent,
   RegexpComponent,
   VerticalMenuComponent,
   HorizontalTabComponent,
   TabBoxComponent,
   PageTitleComponent,
   SearchComponent,
   ChangelogComponent,
   ChangelogService,
   NavigationModule,
   DropdownComponent,
   DropdownMenuComponent
} from '../+examples';
import { routing } from './layout.routing';

import { SharedModule } from '../shared';

import { MarkdownToHtmlPipe } from 'markdown-to-html-pipe';

@NgModule({
   imports: [SharedModule, routing, FormsModule, ReactiveFormsModule, NavigationModule],
   declarations: [
      LayoutComponent,
      ModalComponent,
      MainComponent,
      ColorsComponent,
      TypographyComponent,
      IconsComponent,
      LogoComponent,
      InputComponent,
      ButtonComponent,
      InfoBoxComponent,
      ListComponent,
      SpinnerComponent,
      TwoListSelectionComponent,
      FooterComponent,
      InfoCardComponent,
      TooltipComponent,
      RegexpComponent,
      VerticalMenuComponent,
      HorizontalTabComponent,
      TabBoxComponent,
      PageTitleComponent,
      SearchComponent,
      ChangelogComponent,
      MarkdownToHtmlPipe,
      DropdownComponent,
      DropdownMenuComponent
   ],
   providers: [ChangelogService]
})
export class LayoutModule { }
