import clamp from './clamp';

/**
 * Toggle Disabled
 *
 * @param {HTMLElement | null} target
 * @param {number} now
 * @param {number} value
 * @returns
 */
const toggleDisabled = (target: HTMLElement | null, now: number, value: number) => {
	if (null === target) {
		return;
	}

	if (now === value) {
		return target.setAttribute('disabled', 'true');
	}

	return target.removeAttribute('disabled');
};

/**
 * Set Attributes
 *
 * @param {HTMLElement} element
 * @param {Attributes} attributes
 */
const setAttributes = (element: HTMLElement, attributes: Attributes) => {
	Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
};

/**
 * Set Text
 *
 * @param {number} now
 * @param {Text} append
 * @returns
 */
const setText = (now: number, append: Text) => {
	if (append) {
		return `${now} ${now <= 1 ? append.single : append.plural}`;
	}

	return now.toString();
};

/**
 * Dispatch event
 *
 * @param {HTMLElement} target
 * @param {object} details
 * @param {string} name
 */
const dispatchEvent = (target: HTMLElement, details: object = {}, name: string): boolean => {
	const event = new CustomEvent(`SpinButton.${name}`, {
		bubbles: false,
		cancelable: true,
		detail: details,
	});

	// Dispatch the event on target.
	return target.dispatchEvent(event);
};

/**
 * Represents a collection of attributes where the key is a string and the value is also a string.
 *
 * @type {Object.<string, string>}
 */
type Attributes = {
	[key: string]: string;
};

/**
 * Represents a text object with singular and plural forms.
 */
interface Text {
	single: string;
	plural: string;
}

/**
 * Interface representing the options for the spin button.
 */
interface Options {
	text: Text;
	step: number;
	delay: number;
}

/**
 * Represents a value with a minimum, maximum, current value, and a textual representation.
 *
 * @interface Value
 * @property {number} min - The minimum value.
 * @property {number} max - The maximum value.
 * @property {number} now - The current value.
 * @property {string} text - The textual representation of the value.
 */
interface Value {
	min: number | false;
	max: number | false;
	now: number;
	text: string;
}

const optionsDefault: Options = {
	text: {
		single: 'item',
		plural: 'items',
	},
	step: 1,
	delay: 20,
};
export default class SpinButton {
	el: HTMLElement;
	$input: HTMLInputElement | null;
	$increase: HTMLElement | null;
	$decrease: HTMLElement | null;
	options: Options;
	value: Value;
	text: Text;

	constructor(el: HTMLElement, options = {} as Options) {
		this.el = el;
		// Merge default options with user-provided options, giving precedence to user-provided options.
		this.options = { ...optionsDefault, ...options } as Options;

		this.$input = this.el.querySelector<HTMLInputElement>('input[type="text"]');
		this.$increase = this.el.querySelector('.js-increase');
		this.$decrease = this.el.querySelector('.js-decrease');

		const now = parseInt(this.el.getAttribute('aria-valuenow') || '0', 10);

		this.text =
			(() => {
				try {
					return JSON.parse(this.el.getAttribute('data-spinbutton-text') as string) || options.text;
				} catch {
					return options.text;
				}
			})();

		this.options.step = parseInt(this.el.getAttribute('data-spinbutton-step') || this.options.step.toString(), 10);
		this.options.delay = parseInt(this.el.getAttribute('data-spinbutton-delay') || this.options.delay.toString(), 10);

		this.value = {
			min: this.el.getAttribute('aria-valuemin') !== null ? parseInt(this.el.getAttribute('aria-valuemin') as string, 10) : false,
			max: this.el.getAttribute('aria-valuemax') !== null ? parseInt(this.el.getAttribute('aria-valuemax') || '0', 10) : false,
			now,
			text: setText(now, this.text).toString(),
		};

		// Bind.
		this.handleClick = this.handleClick.bind(this);
	}

	init(): void {
		this.setValue(this.value.now, false);
		this.initEvents();
	}

	initEvents(): void {
		this.el.addEventListener('keydown', this.handleKeydown);
		if (this.$increase) {
			this.$increase.addEventListener('click', () => this.handleClick(this.value.now + this.options.step));
		}
		if (this.$decrease) {
			this.$decrease.addEventListener('click', () => this.handleClick(this.value.now - this.options.step));
		}
		if (this.$input) {
			this.$input.addEventListener('input', this.handleInput);
		}
	}

	handleClick = (value: number) => this.setValue(value);

	handleInput = (event: Event) => {
		const { target } = event;
		const value = parseInt((target as HTMLInputElement).value, 10) || 0;

		this.setValue(value);
	};

	handleKeydown = (event: KeyboardEvent) => {
		const key = event.key || event.code;

		// const setValue = (value: number) => {
		// 	event.preventDefault();
		// 	this.setValue(value);
		// };

		const codes: { [key: string]: () => void } = {
			ArrowUp: () => this.setValue(this.value.now + this.options.step),
			ArrowRight: () => this.setValue(this.value.now + this.options.step),
			ArrowDown: () => this.setValue(this.value.now - this.options.step),
			ArrowLeft: () => this.setValue(this.value.now - this.options.step),
			PageDown: () => this.setValue(this.value.now - this.options.step * 5),
			PageUp: () => this.setValue(this.value.now + this.options.step * 5),
			Home: () => {
				if (typeof this.value.min === 'number') {
					this.setValue(this.value.min);
				}
			},
			End: () => {
				if (typeof this.value.max === 'number') {
					this.setValue(this.value.max);
				}
			},
			default: () => false,
		};

		if (codes[key]) {
			event.preventDefault();
		}

		// Call the function associated with the key
		// or the default function if the key is not found in the codes object.
		// This will ensure that the function is called even if the key is not found.
		// This is a more concise way to handle the function call.
		return (codes[key] || codes.default)();
	}

	setMin(value: number, emit: boolean = true): void {
		this.value.min = parseInt(value.toString(), 10);
		this.el.setAttribute('aria-valuemin', value.toString());
		this.setValue(this.value.now, emit);
	}

	setMax(value: number, emit: boolean = true): void {
		this.value.max = parseInt(value.toString(), 10);
		this.el.setAttribute('aria-valuemax', value.toString());
		this.setValue(this.value.now, emit);
	}

	setValue(value: number, emit: boolean = true): void {
		const current = parseInt(value.toString(), 10);

		if (this.value.min && this.value.max) {
			// Min and max
			// console.log('Min AND max');
			this.value.now = clamp(current, this.value.min, this.value.max);
		} else if (this.value.max === false && this.value.min !== false) {
			// No max
			// console.log('No max');
			this.value.now = clamp(current, this.value.min, Number.MAX_SAFE_INTEGER);
		} else if (this.value.min === false && this.value.max !== false) {
			// No min
			// console.log('No min');
			this.value.now = clamp(current, Number.MIN_SAFE_INTEGER, this.value.max);
		} else {
			// No min or max
			// console.log('No min AND no max');
			this.value.now = clamp(current, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
		}

		this.value.text = setText(this.value.now, this.text);

		if (this.value.max) {
			toggleDisabled(this.$increase, this.value.now, this.value.max);
		}

		if (this.value.min) {
			toggleDisabled(this.$decrease, this.value.now, this.value.min);
		}

		setAttributes(this.el, {
			'aria-valuenow': this.value.now.toString(),
			'aria-valuetext': this.value.text,
		});

		this.$input!.value = this.value.now.toString();

		if (emit) {
			if (!this.debounceDispatchEvent) {
				this.debounceDispatchEvent = this.debounce(() => {
					dispatchEvent(this.el, { value: this.value.now }, 'change');
				}, this.options.delay); // Adjust debounce delay as needed
			}
			this.debounceDispatchEvent();
		}
	}

	private debounceDispatchEvent: (() => void) | null = null;

	private debounce(func: () => void, wait: number): () => void {
		let timeout: number | null = null;
		return () => {
			if (timeout !== null) {
				clearTimeout(timeout);
			}
			timeout = window.setTimeout(() => {
				func();
				timeout = null;
			}, wait);
		};
	}
}
