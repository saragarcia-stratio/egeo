import { TranslateableElement } from '../utils/egeo-resolver/egeo-resolve-model';

export interface StInputError {
  generic?: string;
  required?: string;
  minLength?: string;
  maxLength?: string;
  type?: string;
  min?: string;
  max?: string;
  pattern?: string;
}

export interface StInputErrorSchema {
  generic?: TranslateableElement;
  required?: TranslateableElement;
  minLength?: TranslateableElement;
  maxLength?: TranslateableElement;
  type?: TranslateableElement;
  min?: TranslateableElement;
  max?: TranslateableElement;
  pattern?: TranslateableElement;
}

