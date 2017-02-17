import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StPaginationComponent } from './st-pagination.component';

import { StDropdownModule } from '../st-dropdown';
import { StButtonModule } from '../st-button';



describe('StPaginationComponent', () => {

   let component: StPaginationComponent;
   let fixture: ComponentFixture<StPaginationComponent>;


   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [StDropdownModule, StButtonModule],
         declarations: [StPaginationComponent]
      });

      fixture = TestBed.createComponent(StPaginationComponent);
      component = fixture.componentInstance;

   });

   describe('When insert input perPage', () => {

      it('should not show dropdown', () => {
         component.perPage = 20;
         component.total = 50;
         expect(component.showItemsPerPage()).toBeFalsy();
      });

      it('should show dropdown', () => {
         component.perPage = 20;
         component.total = 1000;
         expect(component.showItemsPerPage()).toBeTruthy();
      });

      it('should fails the component', () => {
         component.perPage = 30;
         expect(() => component.ngOnInit()).toThrowError('The perPage parameter only supports numeric values 20, 50, or 100');
      });

      it('should not show the dropdown menu', () => {
         component.perPage = 20;
         component.total = 40;
         fixture.detectChanges();
         expect(component.showItemsPerPage()).toBeFalsy();
      });

   });

   describe('When update the pagination', () => {

      it('should be the next page', () => {

         component.perPage = 20;
         component.total = 100;
         component.currentPage = 2;

         component.nextPage();
         fixture.detectChanges();

         expect(component.currentPage).toBe(3);
      });

      it('should be the prev page', () => {

         component.perPage = 20;
         component.total = 100;
         component.currentPage = 2;

         component.prevPage();
         fixture.detectChanges();

         expect(component.currentPage).toBe(1);
      });

      it('should be disable the next button', () => {

         component.perPage = 20;
         component.total = 40;
         component.currentPage = 1;

         component.nextPage();
         fixture.detectChanges();

         expect(component.disableNextButton).toBeTruthy();
      });

      it('should be disable the prev button', () => {

         component.perPage = 20;
         component.total = 40;
         component.currentPage = 2;

         component.prevPage();
         fixture.detectChanges();

         expect(component.disablePrevButton).toBeTruthy();
      });

   });

   describe('when component is update', () => {

      it('should generate new item for dropdown', () => {

         component.perPage = 20;
         component.total = 50;
         fixture.detectChanges();

         fixture.componentInstance.total = 300;

         let values = {
            total: 300
         };

         component.ngOnChanges(values);
         fixture.detectChanges();

         expect(component.items.length).toBe(3);


      });


   });

   describe('when the component emit change the perPage paramater', () => {

      it('should click item and dispatch event change with value of item', () => {
         spyOn(component.change, 'emit');

         component.perPage = 20;
         component.total = 300;
         fixture.detectChanges();
         let dropdownElement = fixture.nativeElement.querySelector('st-dropdown');
         dropdownElement.dispatchEvent(new Event('change'));
         fixture.detectChanges();
         expect(component.change.emit).toHaveBeenCalledWith({ currentPage: 1, perPage: 20});
      });


   });

});
