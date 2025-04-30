import { clamp, throttle } from './utils';
import { Options, Value, Text } from './type';

/**
 * Toggle Disabled
 *
 * @param {HTMLElement | null} target
 * @param {number} now
 * @param {number} value
 * @returns
 */
const toggleDisabled = (
	target: HTMLElement | null,
	now: number,
	value: number
) => {
	if (null === target) {
		return;
	}

	if (now === value) {
		return target.setAttribute('disabled', 'true');
	}

	return target.removeAttribute('disabled');
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
const dispatchEvent = (
	target: HTMLElement,
	details: object = {},
	name: string
): boolean => {
	const event = new CustomEvent(`Spinbutton.${name}`, {
		bubbles: false,
		cancelable: true,
		detail: details,
	});

	// Dispatch the event on target.
	return target.dispatchEvent(event);
};

const optionsDefault: Options = {
	text: {
		single: 'item',
		plural: 'items',
	},
	step: 1,
	delay: 20,
};

/**
 * Dynamically adds the `.sr-only` class to the document's styles.
 */
const addSrOnlyStyles = () => {
	const style = document.createElement('style');
	style.textContent = `
		.sr-only {
			position: absolute;
			width: 1px;
			height: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip: rect(0, 0, 0, 0);
			white-space: nowrap;
			border: 0;
		}
	`;
	document.head.appendChild(style);
};

// Call the function to ensure the `.sr-only` class is available
addSrOnlyStyles();

export default class Spinbutton {
	el: HTMLElement;
	$input: HTMLInputElement | null;
	$increase: HTMLButtonElement | null;
	$decrease: HTMLButtonElement | null;
	$liveRegion: HTMLElement | null; // Add a live region for screen reader announcements
	options: Options;
	value: Value;
	text: Text;

	private throttle: (() => void) | null = null;

	constructor(el: HTMLElement, options = {} as Options) {
		this.el = el;
		// Merge default options with user-provided options, giving precedence to user-provided options.
		this.options = { ...optionsDefault, ...options } as Options;

		this.$input = this.el.querySelector<HTMLInputElement>('input[type="text"]');
		this.$increase = this.el.querySelector('.js-increase');
		this.$decrease = this.el.querySelector('.js-decrease');

		// Create and append the live region
		this.$liveRegion = document.createElement('div');
		this.$liveRegion.setAttribute('aria-live', 'polite');
		this.$liveRegion.setAttribute('aria-atomic', 'true');
		this.$liveRegion.classList.add('sr-only'); // Apply the dynamically added class
		this.el.appendChild(this.$liveRegion);

		const now = parseInt(this.el.getAttribute('aria-valuenow') || '0', 10);

		this.text = (() => {
			try {
				return (
					JSON.parse(this.el.getAttribute('data-spinbutton-text') as string) ||
					options.text
				);
			} catch {
				return options.text;
			}
		})();

		this.options.step = parseInt(
			this.el.getAttribute('data-spinbutton-step') ||
				this.options.step.toString(),
			10
		);
		this.options.delay = parseInt(
			this.el.getAttribute('data-spinbutton-delay') ||
				this.options.delay.toString(),
			10
		);

		this.value = {
			min:
				this.el.getAttribute('aria-valuemin') !== null
					? parseInt(this.el.getAttribute('aria-valuemin') as string, 10)
					: false,
			max:
				this.el.getAttribute('aria-valuemax') !== null
					? parseInt(this.el.getAttribute('aria-valuemax') || '0', 10)
					: false,
			now,
			text: setText(now, this.text).toString(),
		};
	}

	init(): void {
		this.setValue(this.value.now, false);
		this.initEvents();
	}

	initEvents(): void {
		this.el.addEventListener('keydown', this.handleKeydown);

		if (this.$increase) {
			this.$increase.addEventListener('click', this.increase);
		}
		if (this.$decrease) {
			this.$decrease.addEventListener('click', this.decrease);
		}
		if (this.$input) {
			this.$input.addEventListener('input', this.handleInput);
		}
	}

	handleInput = (event: Event) => {
		const { target } = event;
		const value = (target as HTMLInputElement).value;

		this.setValue(isNaN(Number(value)) ? parseInt(value, 10) : this.value.now);
	};

	handleKeydown = (event: KeyboardEvent) => {
		const key = event.key || event.code;

		const codes: { [key: string]: () => void } = {
			ArrowUp: () => this.setValue(this.value.now + this.options.step),
			ArrowRight: () => this.setValue(this.value.now + this.options.step),
			ArrowDown: () => this.setValue(this.value.now - this.options.step),
			ArrowLeft: () => this.setValue(this.value.now - this.options.step),
			PageDown: () => this.setValue(this.value.now - this.options.step * 5),
			PageUp: () => this.setValue(this.value.now + this.options.step * 5),
			Home: () => this.value.min && this.setValue(this.value.min),
			End: () => this.value.max && this.setValue(this.value.max),
			Backspace: () => this.value.min && this.setValue(this.value.min),
			Delete: () => this.value.min && this.setValue(this.value.min),
			default: () => false,
		};

		if (codes[key]) {
			event.preventDefault();
			codes[key]();
		}
	};

	decrease = () => {
		this.setValue(this.value.now - this.options.step);
	};

	increase = () => {
		this.setValue(this.value.now + this.options.step);
	};

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
		// Reset if the value is not a number
		const current = isNaN(value) ? this.value.now : parseInt(value.toString(), 10);

		const min = this.value.min !== false ? this.value.min : Number.MIN_SAFE_INTEGER;
		const max = this.value.max !== false ? this.value.max : Number.MAX_SAFE_INTEGER;

		if (current < min || current > max) {
			this.el.setAttribute('aria-invalid', 'true');
		} else {
			this.el.removeAttribute('aria-invalid');
		}

		this.value.now = clamp(current, min, max);
		this.value.text = setText(this.value.now, this.text);

		if (this.value.max !== false) {
			toggleDisabled(this.$increase, this.value.now, this.value.max);
		}

		if (this.value.min !== false) {
			toggleDisabled(this.$decrease, this.value.now, this.value.min);
		}

		this.el.setAttribute('aria-valuenow', this.value.now.toString());
		this.el.setAttribute('aria-valuetext', this.value.text);

		if (this.$input) {
			this.$input.setAttribute('value', this.value.now.toString());
			this.$input.value = this.value.now.toString();
		}

		// Update the live region for screen readers
		if (this.$liveRegion) {
			this.$liveRegion.textContent = this.value.text;
		}

		if (emit) {
			if (!this.throttle) {
				this.throttle = throttle(() => {
					const eventDetail = { value: this.value.now };
					dispatchEvent(this.el, eventDetail, 'change');
				}, this.options.delay); // Adjust throttle delay as needed
			}
			this.throttle();
		}
	}

	destroy(): void {
		this.el.removeEventListener('keydown', this.handleKeydown);

		if (this.$increase) {
			this.$increase.removeEventListener('click', this.increase);
		}
		if (this.$decrease) {
			this.$decrease.removeEventListener('click', this.decrease);
		}
		if (this.$input) {
			this.$input.removeEventListener('input', this.handleInput);
		}

		if (this.$liveRegion) {
			this.el.removeChild(this.$liveRegion);
		}
	}
}
