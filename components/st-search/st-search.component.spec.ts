import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { dispatchEvent } from '@angular/platform-browser/testing/browser_util';

// Component
import { StSearchComponent } from './st-search.component';


let comp: StSearchComponent;
let fixture: ComponentFixture<StSearchComponent>;
let de: DebugElement;

let id: string = 'search-123';
let placeholder: string = 'search a text';
let debounce: number = 10;
let minLength: number = 0;


// I no use beforeEach by https://github.com/angular/angular/issues/12313 (Change detection of @Input with onPush fails)
function buildComponent(debounceTime?: number, minLen?: number): void {
   TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [StSearchComponent]
   });

   fixture = TestBed.createComponent(StSearchComponent);
   comp = fixture.componentInstance;

   comp.qaTag = id;
   comp.placeholder = placeholder;
   comp.debounce = debounceTime ? debounceTime : debounce;
   comp.minLength = minLen ? minLen : minLength;

   fixture.autoDetectChanges(true);
}


describe('StSearchComponent', () => {

   it('should be init correctly', () => {
      buildComponent();
      let input: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;

      expect(input.id).toEqual(id);  // qaTag
      expect(input.placeholder).toEqual(placeholder); // placeholder value
   });

   it('should be search (async)', fakeAsync(() => {
      buildComponent();
      let result: string = 'test';
      let input: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;

      let outputSearch: string;
      comp.onSearch.subscribe((search: string) => outputSearch = search);
      input.value = result;
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      tick(11);
      expect(outputSearch).toEqual(result);
   }));

   it('should be search with delay', fakeAsync(() => {
      buildComponent(1000);
      let result: string = 'test';
      let input: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;

      let outputSearch: string = '';
      comp.onSearch.subscribe((search: string) => outputSearch = search);
      input.value = result;
      dispatchEvent(input, 'input');
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      tick(500);
      expect(outputSearch).not.toEqual(result);
      tick(501);
      expect(outputSearch).toEqual(result);
   }));

   it('should be search with min length', fakeAsync(() => {
      buildComponent(0, 3);
      let input: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;

      let outputSearch: string = '';
      comp.onSearch.subscribe((search: string) => outputSearch = search);

      input.value = 'te';
      dispatchEvent(input, 'input');
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      tick(10);

      expect(outputSearch).toBe('');

      input.value = 'test';
      dispatchEvent(input, 'input');
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      tick(10);

      expect(outputSearch).toEqual('test');
      tick(10);
   }));
});
