import {
   TestBed,
   inject
} from '@angular/core/testing';

import { StHorizontalTabComponent } from './st-horizontal-tab.component';
import {
   RouterTestingModule
} from '@angular/router/testing';


describe('StHorizontalTabComponent', () => {
   beforeEach(() => {
      TestBed.configureTestingModule({
         declarations: [StHorizontalTabComponent],
         imports: [
            RouterTestingModule
         ]
      });
   });

   let stHorizontalTab: StHorizontalTabComponent;

   beforeEach(() => {
      stHorizontalTab = new StHorizontalTabComponent();
   });

   it('should exist', () => {
      expect(stHorizontalTab).not.toBe(undefined);
   });
});
