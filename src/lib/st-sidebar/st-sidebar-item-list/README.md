# SidebarItemList (Component)

   The sidebar item list component has been designed to display a list of items in a sidebar.

## Inputs

| Property | Type            | Req   | Description                          | Default |
| -------- | --------------- | ----- | ------------------------------------ | ------- |
| items    | StSidebarItem[] | False | List of items displayed on the menu  | ''      |
| deep     | Number          | False | Deep of the item list in the sidebar | 0       |
| active   | String          | False | The id of the current active item    | ''      |

## Outputs

| Property | Type   | Description                                    |
| -------- | ------ | ---------------------------------------------- |
| change   | String | Event emitted when the active item  is changed |

## Example


```html
<st-sidebar-item-list [items]="items"
      (change)="onChange($event)"
      [active]="active"
      [deep]="deep">
</st-sidebar-item-list>
```

## Models

*Sidebar items* (StSidebarItem)

```typescript
export interface StSidebarItem {
    id: string;
    label: string;
    class ? : string;
    items ? : StSidebarItem[]
}
```

