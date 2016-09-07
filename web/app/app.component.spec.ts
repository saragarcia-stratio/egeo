import {
  inject,
  TestBed
} from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('App', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AppComponent
    ]}));

  it('should work', inject([ AppComponent ], (app: AppComponent) => {
    expect(app).not.toBe(undefined);
  }));
});
