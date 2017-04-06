import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { dispatchEvent } from '@angular/platform-browser/testing/browser_util';
import { RouterTestingModule } from '@angular/router/testing';

// Component
import { UserMenuComponent } from './user-menu.component';

// Component
import { StHeaderUserMenuModel } from './user-menu.model';


let comp: UserMenuComponent;
let fixture: ComponentFixture<UserMenuComponent>;
let de: DebugElement;

let userMenu: StHeaderUserMenuModel = {
   userName: 'Antonio H.',
   logoutLabel: 'Logout',
   logoutPath: 'path'
};

function buildComponent(): void {
    TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [UserMenuComponent]
    });

    fixture = TestBed.createComponent(UserMenuComponent);
    comp = fixture.componentInstance;

    comp.userMenuModel = userMenu;

    fixture.detectChanges();
    fixture.autoDetectChanges(true);
}


describe('StHeader component', () => {
    describe('UserMenu component', () => {
        it('should be init correctly', () => {
            buildComponent();

            let userName: DebugElement[] = fixture.debugElement.queryAll(By.css('.user-combo-element'));
            let logout: DebugElement = fixture.debugElement.query(By.css('.combo-list-item'));

            expect(userName).toBeDefined();
            expect(userName.length).toEqual(3);
            expect(userName[1]).toBeDefined();
            expect((<HTMLSpanElement>userName[1].nativeElement).textContent).toEqual(userMenu.userName);

            expect(logout).toBeNull();
        });

        it('should be show logout menu', () => {
            buildComponent();

            let userName: DebugElement[] = fixture.debugElement.queryAll(By.css('.user-combo-element'));
            let logout: DebugElement = fixture.debugElement.query(By.css('.combo-list-item'));
            spyOn(comp, 'changeMenuState');

            expect(logout).toBeNull();

            dispatchEvent(userName[1].nativeElement, 'click');
            fixture.detectChanges();

            logout = fixture.debugElement.query(By.css('.combo-list-item'));

            expect(logout).toBeDefined();
            expect(comp.changeMenuState).toHaveBeenCalled();
        });

         it('should be click on logout', () => {
            buildComponent();

            let userName: DebugElement[] = fixture.debugElement.queryAll(By.css('.user-combo-element'));
            spyOn(comp, 'navigateToLogout');

            dispatchEvent(userName[1].nativeElement, 'click');
            fixture.detectChanges();

            let logout: DebugElement = fixture.debugElement.query(By.css('.combo-list-item'));
            dispatchEvent(logout.nativeElement, 'click');
            fixture.detectChanges();

            expect(comp.navigateToLogout).toHaveBeenCalled();
        });
    });
});
