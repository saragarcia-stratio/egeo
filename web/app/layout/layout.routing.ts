import { ModuleWithProviders } from '@angular/core';
import {RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {
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
   ListComponent,
   LogoComponent,
   MainComponent,
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
} from '../+examples';

export const routing: ModuleWithProviders = RouterModule.forChild([
   {
      path: '', component: LayoutComponent, children: [
         { path: '', redirectTo: 'main', pathMatch: 'full' },
         { path: 'button', component: ButtonComponent },
         { path: 'changelog', component: ChangelogComponent },
         { path: 'colors', component: ColorsComponent },
         { path: 'dropdown', component: DropdownComponent },
         { path: 'dropdown-menu', component: DropdownMenuComponent },
         { path: 'footer', component: FooterComponent },
         { path: 'grid', component: GridComponent },
         { path: 'icons', component: IconsComponent },
         { path: 'info-box', component: InfoBoxComponent },
         { path: 'info-card', component: InfoCardComponent },
         { path: 'input', component: InputComponent },
         { path: 'list', component: ListComponent },
         { path: 'logo', component: LogoComponent },
         { path: 'main', component: MainComponent },
         { path: 'modal', component: ModalComponent },
         { path: 'navigation', loadChildren: '../+examples/navigation/navigation.module#NavigationModule' },
         { path: 'page-title', component: PageTitleComponent },
         { path: 'pagination', component: PaginationComponent },
         { path: 'regexp', component: RegexpComponent },
         { path: 'search', component: SearchComponent },
         { path: 'spinner', component: SpinnerComponent },
         { path: 'tab-box', component: TabBoxComponent },
         { path: 'toggle-buttons', component: ToggleButtonsComponent },
         { path: 'tooltip', component: TooltipComponent },
         { path: 'two-list-selection', component: TwoListSelectionComponent },
         { path: 'typography', component: TypographyComponent },
         { path: 'vertical-tabs', component: VerticalTabsComponent }
      ]
   }
]);
