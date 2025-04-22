# @19h47/spinbutton

A spinbutton is an input widget that restricts its value to a set or range of discrete values.

## Installation

```bash
yarn add @19h47/spinbutton
```

## HTML

The spinbutton is a `div` element with the role of `spinbutton`. It contains two buttons for increasing and decreasing the value, and an input field for displaying the current value.

```html
<div role="spinbutton" aria-valuemin="0" aria-valuemax="100" aria-valuenow="10">
	<button class="js-decrease" tabindex="-1" aria-label="decrease" type="button">-</button>

	<input type="number" />

	<button class="js-increase" tabindex="-1" aria-label="increase" type="button">+</button>
</div>
```

## JavaScript

Here is a simple example of how to use the spinbutton.

```javascript
import SpinButton from '@19h47/spinbutton';

const $element = document.querySelector('[role="spinbutton"]');
const spinbutton = new SpinButton($element);

spinbutton.init();
```

## Events

The spinbutton emit the following event, this event is triggered when the value of the spinbutton changes and when the delay time is reached.
The event is triggered when the user clicks on the increase or decrease button, or when the user uses the keyboard to change the value.

| Event             | Args  | Description                       |
| ----------------- | ----- | --------------------------------- |
| SpinButton.change | value | Return the current activate value |

Here is an example of how to use the `SpinButton.change` event.

```javascript
import SpinButton from '@19h47/spinbutton';

const $element = document.querySelector('[role="spinbutton"]');
const options = {
	text: {
		single: 'item',
		plural: 'items'
	},
	step: 5,
	delay: 100
};
const spinbutton = new SpinButton($element, options);

spinbutton.init();

spinbutton.addEventListener('SpinButton.change', event => {
	console.log(event.detail.value); // Return the current activate value
});
```

## Options

The spinbutton accepts the following options. The options can be set as data attributes on the `div` element or passed as an object when creating the spinbutton instance.

| Option  | Type   |                                                                                                   |
| ------- | ------ | ------------------------------------------------------------------------------------------------- |
| `text`  | object | Object containing _single_ and _plural_ text. Can be set as data attribute `data-spinbutton-text` |
| `step`  | number | The step value to increase or decrease the value. Default is `1`. Can be set as data attribute `data-spinbutton-step` |
| `delay` | number | The delay in milliseconds before the event is triggered. Default is `20`. Can be set as data attribute `data-spinbutton-delay` |

## Keyboard Support

The spin buttons provide the following keyboard support described in the [spinbutton design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/).

| Key        | Function                                                             |
| ---------- | -------------------------------------------------------------------- |
| Down Arrow | Decreases value 1 (or step option if given) step.                    |
| Up Arrow   | Increases the value 1 (or step option if given) step.                |
| Page Down  | Decreases the value 5 (or step option multiply by 5 if given) steps. |
| Page Up    | Increases the value 5 (or step option multiply by 5 if given) steps. |
| Home       | Decreases to mimimum value (if given).                               |
| End        | Increases to maximum value (if given).                               |

## Role, Property, State, and Tabindex Attributes

The spinbutton uses the following ARIA roles, properties, and states. The `aria-valuenow` attribute is updated when the value changes. The `aria-valuemin` and `aria-valuemax` attributes are used to define the minimum and maximum values of the spinbutton.

| Role         | Attribute        | Element | Usage                                         |
| ------------ | ---------------- | ------- | ----------------------------------------------|
| `spinbutton` |                  | `div`   | Identifies the `div` element as a spinbutton. |
| `spinbutton` | `aria-valuemin`  | `div`   | The minimum value of the spinbutton.          |
| `spinbutton` | `aria-valuemax`  | `div`   | The maximum value of the spinbutton.          |
| `spinbutton` | `aria-valuenow`  | `div`   | The current value of the spinbutton.          |
| `spinbutton` | `aria-valuetext` | `div`   | The text representation of the current value. |

## References

[Spinbutton Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/)
