import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { dispatchEvent } from '@angular/platform-browser/testing/browser_util';

// Component
import { AppNameComponent } from './app-name.component';


let comp: AppNameComponent;
let fixture: ComponentFixture<AppNameComponent>;
let de: DebugElement;


function buildComponent(): void {
    TestBed.configureTestingModule({
        imports: [],
        declarations: [AppNameComponent]
    });

    fixture = TestBed.createComponent(AppNameComponent);
    comp = fixture.componentInstance;

    comp.appLogoPath = undefined;
    comp.appName = 'Test App';
    comp.companyName = 'Stratio';

    fixture.autoDetectChanges(true);
}


describe('StHeader component', () => {
    describe('AppName component', () => {
        it('should be init correctly without image', () => {
            buildComponent();
            let appLabel: HTMLDivElement = fixture.debugElement.query(By.css('.app-label')).nativeElement;
            let appName: HTMLSpanElement = fixture.debugElement.query(By.css('.sth-app-name')).nativeElement;
            let companyName: HTMLSpanElement = fixture.debugElement.query(By.css('.company-name')).nativeElement;


            expect(appLabel).toBeDefined();
            expect(appLabel).not.toBeNull();
            expect(comp.showAppName).toBeTruthy();
            expect(appName.textContent).toBe(comp.appName);
            expect(companyName.textContent).toBe(comp.companyName);
        });
    });
});
