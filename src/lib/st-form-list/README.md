# Form list (Component)

   The form list component allows to create dynamically list of items.

## Inputs

| Property    | Type      | Req   | Description                                      | Default |
| ----------- | --------- | ----- | ------------------------------------------------ | ------- |
| schema      | Any       | False | JSON schema of items                             | ''      |
| buttonLabel | String    | False | String displayed in the button to add more items | 'Add'   |
| value       | Any[]     | False | Current list value                               | ''      |
| form        | FormGroup | False | Form group                                       | ''      |

## Example


```html
<st-form-list [schema]="jsonSchema"
      [(value)]="model"
      [(form)]="formArray"
      buttonLabel="Add item">
</st-form-list>
```

