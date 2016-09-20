import { Component, Output, EventEmitter, forwardRef, Input, OnChanges, Provider, OnInit } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators, ValidatorFn } from '@angular/forms';
import { STVALIDATIONS } from '../st-validations';
import { StInputError } from './shared';

@Component({
  selector: 'st-input',
  template: require('./st-input.component.html'),
  styles: [require('./st-input.component.scss')],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StInputComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => StInputComponent), multi: true }
  ]
})
export class StInputComponent implements ControlValueAccessor, OnChanges, OnInit {
  @Input() placeholder: string = '';
  @Input() infoMessage: string = '';
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() fieldType: 'string' | 'number' | 'password' = 'string';
  @Input() isRequired: boolean;
  @Input() isDisabled: boolean;
  @Input() accept: string;
  @Input() min: number;
  @Input() max: number;
  @Input() minLength: number;
  @Input() maxLength: number;

  @Input() forceValidations: boolean = false;
  @Input() errors: StInputError;
  @Input() qaTag: string;

  // Model
  @Input() ngModel: string;
  @Output() ngModelChange: EventEmitter<string> = new EventEmitter<string>();

  pristine: boolean = true;

  private internalControl: FormControl;
  private errorMessage: string = undefined;
  private focus: boolean = false;
  private internalType: string = 'text';

  onChange = (_: any) => { };
  onTouched = () => { };
  validateFn: any = () => {};

  changeModel(value: string): void {
    this.ngModel = value;
    this.updateModel();
  }

  validate(control: FormControl): any {
    let errors: { [key: string]: any } = this.validations()(control);
    this.errorMessage = this.getErrorMessage(errors);
    return errors;
  }

  ngOnChanges(): void {
    this.validateFn = this.validateFn;
    this.checkDisabled();
  }

  ngOnInit(): void {
    this.internalControl = new FormControl(this.ngModel, this.validations());
    this.isRequired = this.isRequired !== undefined && this.isRequired !== false;
    this.isDisabled = this.isDisabled !== undefined && this.isDisabled !== false;
    this.internalType = this.fieldType === 'password' ? 'password' : 'text';
    this.checkDisabled();
  }

  writeValue(value: any): void {
    this.ngModel = value;
  }

  registerOnChange(fn: (_: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void { }

  private getBarType(): string {
    return this.showError() ? 'error-bar' : 'normal-bar';
  }

  private onFocus(event: Event): void {
    this.focus = true;
  }

  private onFocusOut(event: Event): void {
    this.focus = false;
  }

  private showError(): boolean {
    return this.errorMessage !== undefined && (!this.internalControl.pristine || this.forceValidations) && !this.isDisabled && !this.focus;
  }

  private getErrorMessage(errors: { [key: string]: any }): string {
    if (!errors) {
      return undefined;
    }

    if (!this.errors) {
      return '';
    }

    if (errors.hasOwnProperty('required')) {
      return this.errors.required || this.errors.generic || '';
    }
    if (errors.hasOwnProperty('fieldType')) {
      return this.errors.type || this.errors.generic || '';
    }
    if (errors.hasOwnProperty('minlength')) {
      return this.errors.minLength || this.errors.generic || '';
    }
    if (errors.hasOwnProperty('pattern')) {
      return this.errors.pattern || this.errors.generic || '';
    }
    if (errors.hasOwnProperty('min')) {
      return this.errors.min || this.errors.generic || '';
    }
    if (errors.hasOwnProperty('max')) {
      return this.errors.max || this.errors.generic || '';
    }
    return '';
  }

  private checkDisabled(): void {
    if (this.isDisabled && this.internalControl && this.internalControl.enabled) {
      this.internalControl.disable();
    } else if (this.internalControl && this.internalControl.disabled) {
      this.internalControl.enable();
    }
  }

  private updateModel(): void {
    this.ngModelChange.emit(this.ngModel);
  }

  private validations(): ValidatorFn {
    let validations: ValidatorFn[] = [];

    // general validations
    if (this.isRequired) {
      validations.push(Validators.required);
    }
    if (this.accept) {
      validations.push(Validators.pattern(this.accept));
    }

    // number validations
    if (this.fieldType === 'number') {
      validations.push(STVALIDATIONS.validateNumber());
      if (this.min) {
        validations.push(STVALIDATIONS.validateMin(this.min));
      }
      if (this.max) {
        validations.push(STVALIDATIONS.validateMax(this.max));
      }
    }
    // string validations
    if (this.fieldType === 'string' || this.fieldType === 'password') {
      if (this.minLength) {
        validations.push(Validators.minLength(this.minLength));
      }
      if (this.maxLength) {
        validations.push(Validators.maxLength(this.maxLength));
      }
    }
    return Validators.compose(validations);
  }
}
