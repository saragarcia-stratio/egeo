# Pop (Component)

   The pop is a component for manage floating elements like popups or dropdown-menu. This element need two element inside,a button element that launch popper and a content element that whose position will be relativo to button element.

## Inputs

| Property  | Type                                                                                                                            | Required | Description                                                            |
| --------- | ------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------- |
| placement | &#39;top&#39; \| &#39;top-start&#39; \| &#39;top-end&#39; \| &#39;bottom&#39; \| &#39;bottom-start&#39; \| &#39;bottom-end&#39; | False    | Define position of content relative to button, default: 'bottom-start' |
| hidden    | Boolean                                                                                                                         | False    | TRUE: show pop content, FALSE: hide pop content, default: true         |

## Example
```
<st-pop [hidden]="false" placement="bottom">
    <div pop-button>Button</div>
    <div pop-content>Content</div>
</st-pop>
```
