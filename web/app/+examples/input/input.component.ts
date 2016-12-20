import { Component } from '@angular/core';
import { StInputError } from '../../../../egeo'; // For declare messages in case of error.

@Component({
  selector: 'input-example',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent {

  model: Object = {
    name: 'Egeo',
    description: '',
    components: 10,
    password: ''
  };

  min: number = 10;
  max: number = 100;
  minlength: number = 3;
  maxlength: number = 10;
  textWithoutSpaces: string = '[a-z]*';
  numberWithoutSpaces: string = '[0-9]*';
  descriptionPlaceholder: string = 'Module description';
  disabledPlaceholder: string = 'Field disabled';
  isDisabled: boolean = true;

  forceValidations: boolean = false;

  errors: StInputError = {
    generic: 'Error',
    required: 'This field is required',
    min: 'The min for this field is: ' + this.min,
    max: 'The max for this field is: ' + this.max,
    minLength: 'The field min length is: ' + this.minlength,
    pattern: 'Invalid value'
  };

  onSubmitTemplateBased(): void {
    console.log('submit value: ', JSON.stringify(this.model));
  }

  checkValidations(): void {
    this.forceValidations = true;
  }

  changeDisabled(): void {
    this.isDisabled = !this.isDisabled;
  }
}
