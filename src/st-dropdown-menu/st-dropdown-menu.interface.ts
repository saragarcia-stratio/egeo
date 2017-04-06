import { TranslateableElement } from '../utils/egeo-resolver/egeo-resolve-model';

export interface StDropDownMenuItem {
   label: string;
   value: any;
   icon?: string;
   selected?: boolean;
}

export interface StDropDownMenuGroup {
   title?: string;
   items: Array<StDropDownMenuItem>;
}

export interface StDropDownMenuItemSchema {
   label: TranslateableElement;
   value: any;
   icon?: string;
   selected?: boolean;
}

export interface StDropDownMenuGroupSchema {
   title?: TranslateableElement;
   items: Array<StDropDownMenuItemSchema>;
}
