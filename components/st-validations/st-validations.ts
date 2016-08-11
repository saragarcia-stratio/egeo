import { FormControl, ValidatorFn } from '@angular/forms';

// Number validations
export namespace STVALIDATIONS {
  'use strict';

  export function validateNumber(): ValidatorFn {
    return (control: FormControl): any => {
      if (valueIsEmpty(control)) {
        return null;
      }
      let error: Object = {
        fieldType: {
          isNumber: false
        }
      };
      return isNaN(control.value) ? error : null;
    };
  }

  export function validateMin(min: number): ValidatorFn {
    return (control: FormControl): any => {
      if (valueIsEmpty(control)) {
        return null;
      }
      let error: Object = {
        min: {
          minNumber: min,
          actual: control.value
        }
      };
      let actual = Number(control.value);
      return !isNaN(control.value) && actual < min ? error : null;
    };
  }

  export function validateMax(max: number): ValidatorFn {
    return (control: FormControl): any => {
      if (valueIsEmpty(control)) {
        return null;
      }
      let error: Object = {
        max: {
          maxNumber: max,
          actual: control.value
        }
      };
      let actual = Number(control.value);
      return !isNaN(control.value) && actual > max ? error : null;
    };
  }
}


function valueIsEmpty(control: FormControl): boolean {
  return (!control || control.value === undefined || control.value === null || control.value === '');
}
