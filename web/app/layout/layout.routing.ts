import { ModuleWithProviders } from '@angular/core';
import {RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';
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
  TwoListSelectionComponent,
  SpinnerComponent,
  FooterComponent,
  InfoCardComponent,
  RegexpComponent,
  VerticalMenuComponent,
  ListComponent,
  TooltipComponent,
  HorizontalTabComponent,
  TabBoxComponent,
  PageTitleComponent,
  SearchComponent,
  ChangelogComponent
} from '../+examples';

export const routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainComponent },
      { path: 'colors', component: ColorsComponent },
      { path: 'typography', component: TypographyComponent },
      { path: 'icons', component: IconsComponent },
      { path: 'logo', component: LogoComponent },
      { path: 'modal', component: ModalComponent },
      { path: 'button', component: ButtonComponent },
      { path: 'input', component: InputComponent },
      { path: 'info-box', component: InfoBoxComponent },
      { path: 'spinner', component: SpinnerComponent },
      { path: 'two-list-selection', component: TwoListSelectionComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'info-card', component: InfoCardComponent },
      { path: 'regexp', component: RegexpComponent },
      { path: 'vertical-menu', component: VerticalMenuComponent },
      { path: 'list', component: ListComponent },
      { path: 'tooltip', component: TooltipComponent },
      { path: 'horizontal-tab', component: HorizontalTabComponent },
      { path: 'tab-box', component: TabBoxComponent },
      { path: 'page-title', component: PageTitleComponent },
      { path: 'search', component: SearchComponent },
      { path: 'changelog', component: ChangelogComponent },
      { path: 'navigation', loadChildren: '../+examples/navigation/navigation.module#NavigationModule'}
    ]
  }
]);
