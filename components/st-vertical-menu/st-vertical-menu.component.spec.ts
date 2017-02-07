import {
  TestBed
} from '@angular/core/testing';

import {Http} from '@angular/http';
import {
  RouterTestingModule
} from '@angular/router/testing';
import {StVerticalMenuComponent} from './st-vertical-menu.component';


describe('StVerticalMenuComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StVerticalMenuComponent],
      imports: [RouterTestingModule],
      providers: []
    });
  });

  let stVerticalMenuComponent: StVerticalMenuComponent;
  let fakeOptions: Array<string> = ['tab 1', 'tab 2', 'tab 3'];

  beforeEach(() => {
    stVerticalMenuComponent = new StVerticalMenuComponent();
  });

  describe('when it is initialized', () => {
    it ('if active option is not defined, first option is activated', () => {
      stVerticalMenuComponent.activeOption = undefined;
      stVerticalMenuComponent.options = fakeOptions;
      stVerticalMenuComponent.ngOnInit();

      expect(stVerticalMenuComponent.isActive(fakeOptions[0])).toBeTruthy();
      expect(stVerticalMenuComponent.activeOptionIndex).toBe(0);
    });
  });
  it('should be able to return if an option is active', () => {
    let activeOptionName = 'active option';

    stVerticalMenuComponent.activeOption = activeOptionName;

    expect(stVerticalMenuComponent.isActive('another option')).toBeFalsy();
    expect(stVerticalMenuComponent.isActive(activeOptionName)).toBeTruthy();
  });

  describe('should be able to activate an option', () => {
    let activeOptionName = 'active option';
    let activeOptionIndex = 6;

    it('when active option is changed, its position and name are updated', () => {
      stVerticalMenuComponent.activateOption(activeOptionName, activeOptionIndex);

      expect(stVerticalMenuComponent.activeOption).toBe(activeOptionName);
      expect(stVerticalMenuComponent.activeOptionIndex).toBe(activeOptionIndex);
    });

    it('when active option is changed, an event is emitted with the active option name', () => {
      spyOn(stVerticalMenuComponent.changedOption, 'emit');

      stVerticalMenuComponent.activateOption(activeOptionName, activeOptionIndex);

      expect(stVerticalMenuComponent.changedOption.emit).toHaveBeenCalledWith(activeOptionName);
    });

  });
});
