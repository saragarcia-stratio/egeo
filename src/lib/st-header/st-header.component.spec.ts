import { Component } from '@angular/core';
import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

// Component
import { StHeaderComponent } from './st-header.component';

// Other components
import { AppNameComponent, NavigationLinksComponent, SubmenuComponent, SubmenuPosDirective, UserMenuComponent } from './shared';

// Models
import { StHeaderModel, StHeaderUserMenuModel } from './shared';


@Component({
   template: ''
})
class DummyComponent { }

let comp: StHeaderComponent;
let fixture: ComponentFixture<StHeaderComponent>;
let de: DebugElement;

let userMenu: StHeaderUserMenuModel = {
   userName: 'Antonio H.',
   logoutLabel: 'Logout',
   logoutPath: 'path'
};

let menu: StHeaderModel[] = [
   {
      icon: 'icon-head',
      label: 'IDENTITIES',
      link: '/navigation/header/test1',
      subMenus: [{
         label: 'USER',
         link: '/navigation/header/test1/subtest1',
         isActive: true
      },
      {
         label: 'GROUP',
         link: '/navigation/header/test1/subtest2',
         isActive: true
      }],
      isActive: true
   },
   {
      icon: 'icon-puzzle',
      label: 'SERVICES',
      link: '/navigation/header/test2',
      subMenus: [],
      isActive: true
   }
];

let appName: string = 'Test App';
let companyName: string = 'Stratio';

function buildComponent(): void {
   TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
            { path: 'navigation/header/test1/subtest1', component: DummyComponent },
            { path: 'navigation/header/test1/subtest2', component: DummyComponent }
         ])
      ],
      declarations: [AppNameComponent, NavigationLinksComponent, SubmenuComponent, SubmenuPosDirective, UserMenuComponent, StHeaderComponent, DummyComponent]
   });

   fixture = TestBed.createComponent(StHeaderComponent);
   comp = fixture.componentInstance;

   comp.appName = appName;
   comp.companyName = companyName;
   comp.userMenu = userMenu;
   comp.menu = menu;
}


describe('StHeader component', () => {
   it('should be init correctly', () => {

      buildComponent();
      spyOn(comp, 'ngOnInit');
      fixture.detectChanges();

      expect(comp.ngOnInit).toHaveBeenCalled();
      expect(comp.hasUserMenu()).toBeTruthy();

   });
});
