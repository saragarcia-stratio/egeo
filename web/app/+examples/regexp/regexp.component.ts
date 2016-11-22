import { Component } from '@angular/core';
import { StRegEx, StInputError } from '../../../../components'; // For declare messages in case of error.
import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'regexp-example',
   template: require('./regexp.component.html'),
   styles: [require('./regexp.component.scss')]
})

export class RegexpComponent {

   model: Object = {
      email: 'egeo@stratio.com'
   };

   isDisabled: boolean = false;
   emailRegExp: string = StRegEx.EMAIL;
   emailPlaceholder: string = 'User email';
   forceValidations: boolean = false;

   errors: StInputError = {
      generic: 'Error',
      required: 'This field is required',
      min: 'The min for this field is: 10',
      max: 'The max for this field is: 10',
      minLength: 'The field min length is: 10',
      pattern: 'Invalid value'
   };

   public apiDoc: ApiDoc = {
      title: 'Regular expresions',
      description: 'Utility for regular expressions',
      haveModel: true,
      apiSection: { inputs: [], outputs: [] },
      exampleDesc: `This example use a email regular expresion for test input values.`
   };

   onSubmitTemplateBased(): void {
      console.log('submit value: ', JSON.stringify(this.model));
   }

   checkValidations(): void {
      this.forceValidations = true;
   }
}
