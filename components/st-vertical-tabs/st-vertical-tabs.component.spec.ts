import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { dispatchEvent } from '@angular/platform-browser/testing/browser_util';
import { Http } from '@angular/http';

import { StVerticalTabsComponent } from './st-vertical-tabs.component';


let comp: StVerticalTabsComponent;
let fixture: ComponentFixture<StVerticalTabsComponent>;
let de: DebugElement;

let fakeOptions: Array<string> = ['tab 1', 'tab 2', 'tab 3'];
let qaTag: string = 'vertical-tabs';


describe('StVerticaltabsComponent', () => {
   beforeEach(() => {
      TestBed.configureTestingModule({
         declarations: [StVerticalTabsComponent]
      });

      fixture = TestBed.createComponent(StVerticalTabsComponent);
      comp = fixture.componentInstance;

      // Initialize values
      comp.options = fakeOptions;
      comp.qaTag = qaTag;

   });

   describe('when it is initialized', () => {
      it('if active option is not defined, first option is activated', () => {
         comp.activeOption = undefined;
         fixture.detectChanges();

         expect(comp.isActive(fakeOptions[0])).toBeTruthy();
         expect(comp.activeOptionIndex).toBe(0);
      });

      it('should active first option if option not exists', () => {
         let activeOptionName = 'not existing option';
         comp.activeOption = activeOptionName;

         fixture.detectChanges();

         expect(comp.isActive(activeOptionName)).toBeFalsy();
         expect(comp.isActive(fakeOptions[0])).toBeTruthy();
      });
   });

   describe('should be able to activate an option', () => {
      let activeOptionIndex = 2;
      let activeOptionName = fakeOptions[activeOptionIndex];

      it('when active option is changed, its position and name are updated', fakeAsync(() => {
         spyOn(comp, 'activateOption').and.callThrough();
         fixture.detectChanges();

         let link: HTMLAnchorElement = fixture.debugElement.query(By.css(`#${qaTag}-tab-2`)).nativeElement;
         dispatchEvent(link, 'click');
         fixture.detectChanges();
         tick();

         expect(comp.activateOption).toHaveBeenCalledWith(activeOptionName);
         expect(comp.activeOptionIndex).toEqual(activeOptionIndex);
      }));

      it('when active option is changed, an event is emitted with the active option name', fakeAsync(() => {
         fixture.detectChanges();

         let outputOption: string = '';
         comp.changeOption.subscribe((option: string) => outputOption = option);

         let link: HTMLAnchorElement = fixture.debugElement.query(By.css(`#${qaTag}-tab-2`)).nativeElement;
         dispatchEvent(link, 'click');
         fixture.detectChanges();
         tick();

         expect(outputOption).toEqual(fakeOptions[2]);
      }));
   });
});
