export interface Menu {
  id: string;
  icon: string;
  title: string;
  route?: string;
  subMenu?: Array<SubMenu>;
}

export interface SubMenu {
  id: string;
  title: string;
  route?: string;
}
