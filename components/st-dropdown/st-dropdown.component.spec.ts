import { TestBed } from '@angular/core/testing';
import StDropdownComponent from './st-dropdown.component';

describe('StDropdownComponent', () => {

   beforeEach(() => {
      TestBed.configureTestingModule({
         declarations: [ StDropdownComponent ]
      });
   });

   let component: StDropdownComponent;

   beforeEach(() => {
      component = new StDropdownComponent();
   });

   it('should be a dropdown inactive by default', () => {
      expect(component.active).toBeFalsy();
   });

   it('should be a dropdown active', () => {
      component.active = true;
      expect(component.active).toBeTruthy();
   });

});
