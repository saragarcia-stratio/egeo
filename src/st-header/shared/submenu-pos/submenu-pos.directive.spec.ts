import { Component } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { dispatchEvent } from '@angular/platform-browser/testing/browser_util';

// Directive
import { SubmenuPosDirective } from './submenu-pos.directive';


@Component({
   styles: ['.main { margin-left: 50px; padding: 0; }'],
   template: '<div class="main" submenuPos [submenuPosIsActive]="status" (positionChange)="change($event)"></div>'
})
class DummyComponent {
   public status: boolean = false;
   public change(newPos: number): void { }
}

let comp: DummyComponent;
let fixture: ComponentFixture<DummyComponent>;
let de: DebugElement;


describe('StHeader component', () => {
   describe('SubMenuPos directive', () => {
      beforeEach(() => {
         TestBed.configureTestingModule({
            imports: [],
            declarations: [SubmenuPosDirective, DummyComponent]
         });

         fixture = TestBed.createComponent(DummyComponent);
         comp = fixture.componentInstance;

         fixture.autoDetectChanges(true);
      });

      it('should be init with offset', () => {
         spyOn(comp, 'change');

         expect(comp.change).not.toHaveBeenCalled();

         comp.status = true;
         fixture.detectChanges();

         expect(comp.change).toHaveBeenCalled();
         expect(comp.change).toHaveBeenCalledWith(58);

      });
   });
});
