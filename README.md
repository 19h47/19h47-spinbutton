# @19h47/spinbutton

A spinbutton is an input widget that restricts its value to a set or range of discrete values.

## HTML

```html
<div role="spinbutton" aria-valuemin="0" aria-valuemax="100" aria-valuenow="10">
	<button class="js-decrease" tabindex="-1" aria-label="decrease" type="button">-</button>

	<input type="number" />

	<button class="js-increase" tabindex="-1" aria-label="increase" type="button">+</button>
</div>
```

## JavaScript

```javascript
import SpinButton from '@19h47/spinbutton';

const $element = document.querySelector('[role="spinbutton"]');
const spinbutton = new SpinButton($element);

spinbutton.init();
```

## Events

| Event             | Args  | Description                       |
| ----------------- | ----- | --------------------------------- |
| SpinButton.change | value | Return the current activate value |

```javascript
import SpinButton from '@19h47/spinbutton';

const $element = document.querySelector('[role="spinbutton"]');
const spinbutton = new SpinButton($element);

spinbutton.init();

spinbutton.on('SpinButton.change', value => {
	console.log(value);
});
```

## Options

| Option | Type   |                                                                                                   |
| ------ | ------ | ------------------------------------------------------------------------------------------------- |
| `text` | object | Object containing _single_ and _plural_ text. Can be set as data attribute `data-spinbutton-text` |

## Keyboard Support

The spin buttons provide the following keyboard support described in the [spin button design pattern](https://www.w3.org/TR/wai-aria-practices/#spinbutton).

| Key        | Function                     |
| ---------- | ---------------------------- |
| Down Arrow | Decreases value 1 step.      |
| Up Arrow   | Increases the value 1 step.  |
| Page Down  | Decreases the value 5 steps. |
| Page Up    | Increases the value 5 steps. |
| Home       | Decreases to mimimum value.  |
| End        | Increases to maximum value.  |

## Role, Property, State, and Tabindex Attributes

| Role         | Attribute | Element | Usage                                         |
| ------------ | --------- | ------- | --------------------------------------------- |
| `spinbutton` |           | `div`   | Identifies the `div` element as a spinbutton. |

## References

[Spinbutton Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/)
