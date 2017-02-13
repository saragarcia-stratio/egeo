import { ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { StPageTitleComponent } from './st-page-title.component';
import { StButtonModule } from '../st-button';

let component: StPageTitleComponent;
let fixture: ComponentFixture<StPageTitleComponent>;


describe('StPageTitleComponent', () => {
   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [StButtonModule],
         declarations: [StPageTitleComponent]
      });

      fixture = TestBed.createComponent(StPageTitleComponent);
      component = fixture.componentInstance;
      component.qaTag = 'test qaTag';
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
