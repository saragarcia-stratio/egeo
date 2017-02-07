import {
  TestBed
} from '@angular/core/testing';

import {Http} from '@angular/http';
import {
  RouterTestingModule
} from '@angular/router/testing';
import {StInfoCardComponent} from './st-info-card.component';


describe('StInfoCardComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StInfoCardComponent],
      imports: [RouterTestingModule],
      providers: []
    });
  });

  let stInfoCardComponent: StInfoCardComponent;
  let fakeOptions: Array<string> = ['tab 1', 'tab 2', 'tab 3'];

  beforeEach(() => {
    stInfoCardComponent = new StInfoCardComponent();
  });

  it ('Should be able to change the photo to default photo when photo url is broken', () => {
    stInfoCardComponent.photo = 'broken/img/url';
    stInfoCardComponent.onPhotoError();

    expect(stInfoCardComponent.photo).toBe(stInfoCardComponent.defaultPhoto);
  });
});
