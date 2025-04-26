# @19h47/spinbutton

A spinbutton is an input widget that restricts its value to a set or range of discrete values. It provides an accessible, keyboard-navigable interface for numerical input that maintains value constraints, supports internationalization through custom text labels, and emits events when values change.

## Installation

### Using Package Manager

The recommended way to install the Spinbutton component is through a package manager like npm or yarn:

```bash
# Using npm
npm install @19h47/spinbutton

# Using yarn
yarn add @19h47/spinbutton
```

### Manual Download

You can also download the component directly from the GitHub repository at [https://github.com/19h47/19h47-spinbutton](https://github.com/19h47/19h47-spinbutton) and include the distributed files in your project.

## DOM structure

The Spinbutton requires a specific HTML structure to function properly:

The spinbutton is a `div` element with the role of `spinbutton`. It contains two buttons for increasing and decreasing the value, and an input field for displaying the current value.

```html
<div role="spinbutton" aria-valuemin="0" aria-valuemax="100" aria-valuenow="10">
	<button class="js-decrease" tabindex="-1" aria-label="decrease" type="button">-</button>

	<input type="text" />

	<button class="js-increase" tabindex="-1" aria-label="increase" type="button">+</button>

</div>
```

## JavaScript

Here is a simple example of how to use the spinbutton.

```javascript
import Spinbutton from '@19h47/spinbutton';

const $element = document.querySelector('[role="spinbutton"]');
const spinbutton = new Spinbutton($element);

spinbutton.init();
```

## Event Handling

The Spinbutton component emits a Spinbutton.change event when the value changes:

| Event             | Args  | Description                       |
| ----------------- | ----- | --------------------------------- |
| Spinbutton.change | value | Return the current activate value |

Here is an example of how to use the `Spinbutton.change` event.

```javascript
import Spinbutton from '@19h47/spinbutton';

const $element = document.querySelector('[role="spinbutton"]');
const spinbutton = new Spinbutton($element);

spinbutton.init();

spinbutton.addEventListener('Spinbutton.change', event => {
	console.log(event.detail.value); // Return the current activate value
});
```

## Configuration Options

The spinbutton accepts the following options. The options can be set as data attributes on the `div` element or passed as an object when creating the spinbutton instance.

| Option  | Type   |                                                          | Default | Attributes              |
| ------- | ------ | -------------------------------------------------------- | ------- | ----------------------- |
| `text`  | object | Object containing _single_ and _plural_ text.            | -       | `data-spinbutton-text`  |
| `step`  | number | The step value to increase or decrease the value.        | 1       | `data-spinbutton-step`  |
| `delay` | number | The delay in milliseconds before the event is triggered. | 20      | `data-spinbutton-delay` |

Example with options:

```javascript
import Spinbutton from '@19h47/spinbutton';
const $element = document.querySelector('[role="spinbutton"]');
const options = {
	text: {
		single: 'item',
		plural: 'items'
	},
	step: 5,
	delay: 100
};
const spinbutton = new Spinbutton($element, options);
spinbutton.init();
```

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

## Customization Examples

### Step Size

You can customize the step size:

```html
<div role="spinbutton" data-spinbutton-step="5" aria-valuemin="5" aria-valuemax="50" aria-valuenow="5">
    <!-- buttons and input -->
</div>
```
### Custom Text

You can provide custom text for singular and plural forms:

```html
<div role="spinbutton" data-spinbutton-text='{"single":"barrel","plural":"barrels"}' aria-valuemin="1" aria-valuemax="100" aria-valuenow="1">
    <!-- buttons and input -->
</div>
```

### Dynamic Control

You can dynamically change the minimum, maximum, and current values:

```javascript
// Set new minimum value
spinbutton.setMin(10);

// Set new maximum value
spinbutton.setMax(200);

// Set new value
spinbutton.setValue(50);
```

## References

[Spinbutton Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/)
