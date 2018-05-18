# Sidebar (Component)

   The sidebar component has been designed to navigate through different sections of a web page.

## Inputs

| Property | Type            | Req   | Description                         | Default |
| -------- | --------------- | ----- | ----------------------------------- | ------- |
| title    | String          | False | Title displayed on the top of menu  | ''      |
| active   | StSidebarItem   | False | The current active item             | ''      |
| items    | StSidebarItem[] | False | List of items displayed on the menu | ''      |

## Outputs

| Property | Type          | Description                                                               |
| -------- | ------------- | ------------------------------------------------------------------------- |
| change   | StSidebarItem | Event emitted when the active item is changed. This emits the active item |

## Example


```html
<st-sidebar class="sidebar"
      title="Mesos Manager"
      [items]="items"
      qaTag="sidebar-demo">
</st-sidebar>
```

## Models

*Sidebar items* (StSidebarItem)

```typescript
export interface StSidebarItem {
    id: string;
    label: string;
    class ? : string;
    items ? : StSidebarItem[];
}
```

