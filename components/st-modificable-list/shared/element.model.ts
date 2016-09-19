export interface StModificableListElement {
  id: string;
  name: string;
}

export interface StListModifierObject {
  actionToAdd: boolean;
  list: Array<StModificableListElement>;
}

