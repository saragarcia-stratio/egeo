import { HorizontalTabsComponent } from './horizontal-tabs/horizontal-tabs.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent, FakePageComponent } from './header';
import { RadioMenuComponent } from './radio-menu';

// tslint:disable:max-line-length
let longData: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus volutpat nulla, id accumsan magna mollis et. Pellentesque fermentum ultricies nisl quis eleifend. Curabitur consectetur blandit eros, in congue felis efficitur ac. Nam at odio ut nibh egestas hendrerit ac a sem. Etiam non lobortis magna. Sed bibendum consectetur mattis. Maecenas rutrum vulputate posuere.

Vivamus vel sapien non quam aliquam elementum vel quis turpis. Nulla imperdiet consectetur dui, et bibendum enim vestibulum sit amet. Fusce sed arcu auctor, vehicula ipsum sit amet, ultricies ligula. Nullam enim mi, ultricies vel cursus at, tincidunt luctus dolor. Nullam ut molestie tortor. In nec mauris sit amet purus rhoncus vestibulum eget ut ante. Nullam at accumsan enim. Donec non sem ut magna vulputate finibus. Vivamus laoreet rhoncus ante sit amet semper. Cras lobortis elit id ipsum pretium, laoreet maximus sem malesuada. Suspendisse ante leo, varius eu eleifend a, hendrerit vel ante. Etiam posuere imperdiet turpis id porttitor.

Aliquam vestibulum est eget risus fermentum, sed porttitor elit consequat. Donec vitae lectus tellus. Aliquam gravida tempus risus at laoreet. Vestibulum pretium mauris pretium tellus scelerisque viverra. Cras blandit gravida ultrices. Aliquam sit amet massa dui. Phasellus in viverra dolor. Fusce dictum ante nulla, eget luctus felis volutpat non. Donec nec arcu vel magna condimentum euismod. In molestie porttitor nunc nec bibendum.

Fusce luctus congue velit, ac tincidunt eros vestibulum eget. Nulla eget molestie nunc. Nunc id ante est. Cras porta volutpat ligula eu mollis. Curabitur volutpat consectetur nibh, hendrerit dictum sem venenatis a. Vestibulum tempor lacus sed arcu convallis elementum. Ut eget auctor tortor. Morbi sollicitudin dictum erat, id congue lacus imperdiet eget. Morbi ut elementum nunc. Curabitur rutrum eget ipsum consequat facilisis.

Maecenas et sollicitudin ante, sit amet consectetur mauris. Praesent nibh ante, blandit in malesuada non, lacinia in quam. Aliquam sodales accumsan porttitor. Aenean suscipit ipsum sed quam vestibulum, id tincidunt magna dignissim. Nullam et fringilla nisl, vitae bibendum erat. Donec orci turpis, interdum vel venenatis eu, porta vel augue. Nullam porttitor, ligula id scelerisque posuere, erat nunc condimentum mauris, ac maximus tortor dolor et sapien. Maecenas id diam augue. Proin ligula mi, pulvinar vitae purus eu, pellentesque iaculis magna. Integer nec ipsum nec augue ornare commodo. Donec vitae magna in justo vestibulum viverra. Nam sed sem non erat commodo convallis. In consectetur maximus lorem, vitae malesuada risus tempor ac. Nulla facilisi. Maecenas ligula justo, tristique id ligula et, eleifend pulvinar dui.`;
// tslint:enable:max-line-length

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: 'radio-menu', component: RadioMenuComponent },
   { path: 'horizontal-tabs', component: HorizontalTabsComponent },
   { path: 'header', component: HeaderComponent, children: [
      { path: 'test1', redirectTo: 'test1/subtest1', pathMatch: 'full' },
      { path: 'test1', component: FakePageComponent, data: { pageName: 'TEST 1'  }, children: [
         { path: 'subtest1', component: FakePageComponent, data: { pageName: 'SUBTEST 1'  } },
         { path: 'subtest2', component: FakePageComponent, data: { pageName: 'SUBTEST 2'  } }
      ] },
      { path: 'test2', component: FakePageComponent, data: { pageName: 'TEST 2'  } },
      { path: 'test3', component: FakePageComponent, data: { pageName: 'TEST 3'  } },
      { path: 'test4', component: FakePageComponent, data: { pageName: longData  } },
      { path: 'test5', component: FakePageComponent, data: { pageName: 'TEST 5'  } }
   ]}
]);
