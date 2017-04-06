import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { dispatchEvent } from '@angular/platform-browser/testing/browser_util';

import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StTooltip } from '../st-tooltip/st-tooltip.component';
import { StInputComponent } from './st-input.component';

let component: StInputComponent;
let fixture: ComponentFixture<StInputComponent>;
let input: HTMLInputElement;

describe('StInputComponent', () => {
   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [FormsModule, ReactiveFormsModule],
         declarations: [StInputComponent, StTooltip]
      });

      fixture = TestBed.createComponent(StInputComponent);
      input = fixture.nativeElement.querySelector('input');
      component = fixture.componentInstance;
      component.qaTag = 'test qaTag';
   });

   it ('Input should has a placeholder', () => {
      component.placeholder = 'Placeholder sample';
      fixture.detectChanges();
      expect(input.getAttribute('placeholder')).toContain('Placeholder sample');
   });

   it ('Input should be a password Input', () => {
      component.fieldType = 'password';
      fixture.detectChanges();
      expect(input.getAttribute('type')).toContain('password');
   });

   it ('Input should be disabled', () => {
      fixture.autoDetectChanges(true);
      component.setDisabledState(true);
      expect(input.disabled).toBe(true);
      component.setDisabledState(false);
      expect(input.disabled).toBe(false);
   });

   it ('Input should be enabled', () => {
      fixture.autoDetectChanges(true);
      component.setDisabledState(false);
      expect(input.disabled).toBe(false);
   });

   it ('Input should be focused naturally', () => {
      fixture.autoDetectChanges(true);
      input.focus();
      expect(component.focus).toBe(true);
   });

   it ('Input should be focused as default', () => {
      component.isFocused = true;
      fixture.detectChanges();
      expect(component.focus).toBe(true);
   });
});
