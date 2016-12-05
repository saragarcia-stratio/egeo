import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Component
import { StSearchComponent } from './st-search.component';


let comp: StSearchComponent;
let fixture: ComponentFixture<StSearchComponent>;
let de: DebugElement;

let id: string = 'search-123';
let placeholder: string = 'search a text';
let debounce: number = 10;
let minLength: number = 0;

describe('StSearchComponent', () => {
   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [FormsModule, ReactiveFormsModule],
         declarations: [StSearchComponent]
      });

      fixture = TestBed.createComponent(StSearchComponent);
      comp = fixture.componentInstance;

      comp.qaTag = id;
      comp.placeholder = placeholder;
      comp.debounce = debounce;
      comp.minLength = minLength;
   });

   it('should be init correctly', () => {
      fixture.detectChanges();
      let input: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;

      expect(input.id).toEqual(id);  // qaTag
      expect(input.placeholder).toEqual(placeholder); // placeholder value
   });

   // waiting for fix: https://github.com/angular/angular/issues/10127
   xit('should be search (async)', fakeAsync(() => {
      fixture.detectChanges();

      let result: string = 'test';
      let input: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
      input.value = result;

      let outputSearch: string;
      comp.onSearch.subscribe((search: string) => outputSearch = search);

      tick(50);
      expect(outputSearch).not.toEqual(result);
   }));

   // waiting for fix: https://github.com/angular/angular/issues/10127
   xit('should be search with delay', fakeAsync(() => {

      comp.debounce = 1000;
      fixture.detectChanges();

      let result: string = 'test';
      let input: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
      input.value = result;

      let outputSearch: string = '';
      comp.onSearch.subscribe((search: string) => outputSearch = search);

      tick(500);
      console.log('primer timeout', outputSearch, result);
      expect(outputSearch).toEqual(result);
      tick(1000);
      console.log('segundo timeout', outputSearch, result);
      expect(outputSearch).toEqual(result);
   }));

   // TODO: When bug is fixed, we can implement more test suites like press enter, click in zoom, minLength check, etc.
});
