import { DebugElement, SimpleChange, SimpleChanges } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Http } from '@angular/http';
import { By } from '@angular/platform-browser';

// Components
import { ListItemComponent } from './list-item.component';

// Mdel
import { StTwoListSelectionElement } from '../st-two-list-selection.model';

let comp: ListItemComponent;
let fixture: ComponentFixture<ListItemComponent>;
let de: DebugElement;
let qaTag: string = 'st-two-list-test';
let element: StTwoListSelectionElement = {
   id: 1,
   name: 'test'
};

describe('StTwoListSelectionComponent', () => {
   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ListItemComponent]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(ListItemComponent);
      comp = fixture.componentInstance;
      comp.qaTag = qaTag;
      comp.item = element;
   });

   describe('ListItemComponent', () => {
      it('Should init correctly', () => {
         fixture.detectChanges();
         expect(comp.itemName).toEqual(element.name);
         expect(comp.itemQaTag).toEqual(qaTag + '-item-' + element.id);
         expect(comp.selected).toBe(undefined);

         let input: DebugElement = fixture.debugElement.query(By.css('input'));
         expect(input).toBeNull();
      });

      it('Should emit when select item', () => {
         let outputSelect = jasmine.createSpy('responseSelect');

         comp.selectItem.subscribe(outputSelect);
         comp.editable = true;
         fixture.detectChanges();
         let input: DebugElement = fixture.debugElement.query(By.css('input'));

         expect(input).toBeDefined();
         (input.nativeElement as HTMLInputElement).click();
         input.nativeElement.dispatchEvent(new Event('input'));
         fixture.detectChanges();

         expect(outputSelect).toHaveBeenCalled();
         expect(outputSelect).toHaveBeenCalledWith(element);
      });

      it('Should emit when select extraLabel', () => {
         let outputSelect = jasmine.createSpy('responseSelect');
         let extraItem = Object.assign({}, element, {extraLabel: '<p>test</p>'});

         comp.selectExtraLabel.subscribe(outputSelect);
         comp.editable = true;
         comp.item = extraItem;
         fixture.detectChanges();

         let extraLabel: DebugElement[] = fixture.debugElement.queryAll(By.css('span'));
         expect(extraLabel).toBeDefined();
         expect(extraLabel.length).toBe(2);
         expect((extraLabel[1].nativeElement as HTMLSpanElement).innerHTML).toEqual(extraItem.extraLabel);
         (extraLabel[1].nativeElement as HTMLSpanElement).click();
         fixture.detectChanges();
         expect(outputSelect).toHaveBeenCalled();
      });
   });
});
