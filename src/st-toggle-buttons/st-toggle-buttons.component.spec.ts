import {
   inject,
   TestBed
} from '@angular/core/testing';

import {
   RouterTestingModule
} from '@angular/router/testing';
import { StToggleButtonsComponent } from './st-toggle-buttons.component';


describe('StToggleButtonsComponent', () => {
   beforeEach(() => {
      TestBed.configureTestingModule({
         declarations: [StToggleButtonsComponent],
         imports: [
            RouterTestingModule
         ]
      });
   });

   let ttToggleButtons: StToggleButtonsComponent;

   beforeEach(() => {
      ttToggleButtons = new StToggleButtonsComponent();
   });

   it('should exist', () => {
      expect(ttToggleButtons).not.toBe(undefined);
   });
});
