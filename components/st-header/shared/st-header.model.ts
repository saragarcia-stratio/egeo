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
