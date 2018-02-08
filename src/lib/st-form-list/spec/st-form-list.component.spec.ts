import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, FormArray, FormGroup } from '@angular/forms';
import { StFormListComponent } from '../st-form-list.component';
import { TWO_INPUTS_JSON_SCHEMA } from './resources/two-inputs-json-schema';
import { PipesModule } from '../../pipes/pipes.module';
import { StFormDirectiveModule } from '../../directives/form/form-directives.module';
import { StFormFieldModule } from '../../st-form/st-form-field/st-form-field.module';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';

let component: StFormListComponent;
let fixture: ComponentFixture<StFormListComponent>;
let fakeModel: Array<any> = [
   { genericNumberInput: 8, genericTextInput: 'fake text 1' },
   { genericNumberInput: 20, genericTextInput: 'fake text 2' }
];

describe('[StFormList]', () => {

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [FormsModule, StFormFieldModule, CommonModule,
            FormsModule,
            ReactiveFormsModule,
            StFormFieldModule,
            PipesModule,
            StFormDirectiveModule],
         declarations: [StFormListComponent]
      })
      // remove this block when the issue #12313 of Angular is fixed
         .overrideComponent(StFormListComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StFormListComponent);
      component = fixture.componentInstance;
   });

   describe('should allow to customize the label of the button to add more items', () => {
      it('if button label is not introduced as input, a default label is displayed', () => {
         fixture.detectChanges();
         expect(fixture.nativeElement.querySelector('.button.button-link-primary').innerText).toContain('Add');
      });

      it('if label is introduced as input, it is added to the button', () => {
         let buttonLabel = 'Add items';
         component.buttonLabel = 'Add items';
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.button.button-link-primary').innerText).toContain(buttonLabel);
      });

   });

   describe('should be able to create an array of items', () => {
      beforeEach(() => {
         component.schema = TWO_INPUTS_JSON_SCHEMA;
         fixture.detectChanges();
      });

      it('array is loaded according to the model introduced as input', () => {
         component.value = [...fakeModel];
         fixture.detectChanges();

         fixture.whenStable().then(() => {
            fixture.detectChanges();

            let rows = fixture.nativeElement.querySelectorAll('.st-form-list__row');

            expect(rows.length).toBe(fakeModel.length);
            expect(component.form.controls.length).toBe(fakeModel.length);

            let itemProperties = Object.keys(TWO_INPUTS_JSON_SCHEMA.properties);
            for (let i = 0; i < rows.length; ++i) {
               let inputs: HTMLInputElement[] = rows[i].querySelectorAll('input');
               expect(inputs[0].id).toBe(itemProperties[0]);
               expect(inputs[0].value).toEqual(String(fakeModel[i][itemProperties[0]]));
               expect((<FormGroup>component.form.controls[i]).controls[itemProperties[0]].value).toEqual(fakeModel[i][itemProperties[0]]);

               expect(inputs[1].id).toBe(itemProperties[1]);
               expect(inputs[1].value).toEqual(String(fakeModel[i][itemProperties[1]]));
               expect((<FormGroup>component.form.controls[i]).controls[itemProperties[1]].value).toEqual(fakeModel[i][itemProperties[1]]);
            }
         });
      });
   });

   describe('user can add new items to list', () => {
      it('item is loaded according to the json schema displaying with a default value if exists', () => {
         component.schema = TWO_INPUTS_JSON_SCHEMA;
         fixture.detectChanges();
         fixture.nativeElement.querySelector('.button.button-link-primary').click();
         fixture.detectChanges();

         fixture.whenStable().then(() => {
            fixture.detectChanges();
            fixture.changeDetectorRef.markForCheck();

            let controls = fixture.nativeElement.querySelectorAll('input');
            expect(controls.length).toBe(Object.keys(TWO_INPUTS_JSON_SCHEMA.properties).length);
            for (let i = 0; i < Object.keys(TWO_INPUTS_JSON_SCHEMA.properties).length; ++i) {
               let property: string = Object.keys(TWO_INPUTS_JSON_SCHEMA.properties)[i];
               expect(fixture.nativeElement.querySelector('#' + property)).not.toBeNull();
               expect(controls[i].value).toEqual(String(TWO_INPUTS_JSON_SCHEMA.properties[property].default));
            }
         });
      });
   });

   describe('user can remove a item from list', () => {
      it('item is loaded according to the json schema displaying with a default value if exists', () => {
         component.form = new FormArray([]);
         component.schema = TWO_INPUTS_JSON_SCHEMA;
         component.value = [...fakeModel];

         expect(component.form.controls.length).toBe(fakeModel.length);

         fixture.detectChanges();
         let removeButtons: any[] = fixture.nativeElement.querySelectorAll('.remove-button');
         removeButtons[1].click();
         fixture.detectChanges();

         expect(component.value.length).toBe(fakeModel.length - 1);
         expect(component.value).toEqual([...fakeModel].slice(0, fakeModel.length - 1));
         expect(component.form.controls.length).toBe(fakeModel.length - 1);
      });
   });
});

