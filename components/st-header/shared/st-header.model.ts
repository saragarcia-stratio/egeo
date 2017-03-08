import { TranslateableElement } from '../../utils';

export interface StHeaderModel {
   icon?: string;
   label: string;
   link: string;
   isActive: boolean;
   subMenus: Array<StSubMenuModel>;
   notifications?: number;
}

export interface StSubMenuModel {
   label: string;
   link: string;
   isActive: boolean;
}

/** For translate service */
export interface StHeaderModelSchema {
   icon?: string;
   label: TranslateableElement;
   link: string;
   isActive: boolean;
   subMenus: Array<StSubMenuModelSchema>;
   notifications?: number;
}

export interface StSubMenuModelSchema {
   label: TranslateableElement;
   link: string;
   isActive: boolean;
}
