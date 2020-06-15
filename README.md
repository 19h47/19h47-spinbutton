# @19h47/spinbutton

A spinbutton is an input widget that restricts its value to a set or range of discrete values.

## Events

| Event             | Args  | Description                       |
| ----------------- | ----- | --------------------------------- |
| SpinButton.change | value | Return the current activate value |

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

| Role         | Attribute | Element | Usage                                                                                                                                                                                                            |
| ------------ | --------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `spinbutton` |           | `div`   | <ul><li>Identifies the `div` as a group.</li><li>The group provides a means to inform assistive technology users that the three spin buttons are all related to the single purpose of choosing a date.</li></ul> |

## HTML Source Code

```html
<div role="spinbutton" aria-valuemin="0" aria-valuemax="100" aria-valuenow="10">
	<button class="js-decrease" tabindex="-1" aria-label="decrease" type="button">
		-
	</button>

	<input type="text" />

	<button class="js-increase" tabindex="-1" aria-label="increase" type="button">
		+
	</button>
</div>
```

[Spin Button Design Pattern in WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices/#spinbutton)
