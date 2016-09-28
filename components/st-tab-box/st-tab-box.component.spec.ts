import {
  TestBed,
  inject
} from '@angular/core/testing';

import { StTabBoxComponent } from './st-tab-box.component';
import {
  RouterTestingModule
} from '@angular/router/testing';


describe('StTabBoxComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StTabBoxComponent],
      imports: [
        RouterTestingModule
      ]
    });
  });

  let stHorizontalTab: StTabBoxComponent;

  beforeEach(() => {
    stHorizontalTab = new StTabBoxComponent();
  });

  it('should exist', () => {
    expect(stHorizontalTab).not.toBe(undefined);
  });
});
