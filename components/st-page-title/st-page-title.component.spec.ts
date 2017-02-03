import { ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { StPageTitleComponent } from './st-page-title.component';
import { StButtonComponent } from '../st-button/st-button.component';

let component: StPageTitleComponent;
let fixture: ComponentFixture<StPageTitleComponent>;


describe('StPageTitleComponent', () => {
   beforeEach(() => {
      TestBed.configureTestingModule({
         declarations: [StPageTitleComponent, StButtonComponent]
      });

      fixture = TestBed.createComponent(StPageTitleComponent);
      component = fixture.componentInstance;
   });


   it("Only when there is the input 'leftButton', button is shown before title", () => {
      component.leftButton = undefined;
      fixture.detectChanges();

      let button: HTMLButtonElement = fixture.nativeElement.querySelector('.st-page-title button');
      expect(button).toBeNull();

      component.leftButton = 'icon-reply';
      fixture.detectChanges();

      button = fixture.nativeElement.querySelector('.st-page-title button');
      expect(button).toBeDefined();
   });
});
