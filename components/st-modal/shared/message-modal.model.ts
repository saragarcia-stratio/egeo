import { Subject } from 'rxjs';
import { ModalTitle } from '../modal.model';


export enum BUTTON_TYPES {ACCEPT, CANCEL}

export interface Buttons {
  title: string;
  type: BUTTON_TYPES;
  notify: Subject<BUTTON_TYPES>;
}

export interface MessageModal {
  title: ModalTitle;
  message: string;
  buttons: Array<Buttons>;
}
