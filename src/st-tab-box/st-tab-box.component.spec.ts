import {
  inject,
  TestBed
} from '@angular/core/testing';

import {
  RouterTestingModule
} from '@angular/router/testing';
import { StTabBoxComponent } from './st-tab-box.component';


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
