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
	Object.keys(attributes).map(key => element.setAttribute(key, attributes[key]));
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
		return `${now} ${1 >= now ? append.single : append.plural}`;
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
const dispatchEvent = (target: HTMLElement, details: object = {}, name: string = ''): boolean => {
	const event = new CustomEvent(`SpinButton.${name}`, {
		bubbles: false,
		cancelable: true,
		detail: details,
	});

	// Dispatch the event on target.
	return target.dispatchEvent(event);
};

type Attributes = {
	[key: string]: string;
};

interface Text {
	single: string;
	plural: string;
}

interface Options {
	text: Text;
}

interface Value {
	min: number;
	max: number;
	now: number;
	text: string;
}

const optionsDefault: Options = {
	text: {
		single: 'item',
		plural: 'items',
	},
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
		this.options = { ...optionsDefault, ...options } as Options;

		this.$input = this.el.querySelector<HTMLInputElement>('input[type="text"]');
		this.$increase = this.el.querySelector('.js-increase');
		this.$decrease = this.el.querySelector('.js-decrease');

		const now = JSON.parse(this.el.getAttribute('aria-valuenow') as string);

		this.text =
			JSON.parse(this.el.getAttribute('data-spinbutton-text') as string) || options.text;

		this.value = {
			min: JSON.parse(this.el.getAttribute('aria-valuemin') as string),
			max: JSON.parse(this.el.getAttribute('aria-valuemax') as string),
			now,
			text: setText(now, this.text).toString(),
		};

		// Bind.
		this.handleClick = this.handleClick.bind(this);
	}

	init(): void {
		this.setValue(this.value.now);
		this.initEvents();
	}

	initEvents(): void {
		this.el.addEventListener('keydown', this.handleKeydown);
		this.$increase!.addEventListener('click', () => this.handleClick(this.value.now + 1));
		this.$decrease!.addEventListener('click', () => this.handleClick(this.value.now - 1));
		this.$input!.addEventListener('input', this.handleInput);
	}

	handleClick = (value: number) => this.setValue(value);

	handleInput = (event: Event) => {
		const { target } = event;
		const value = parseInt((target as HTMLInputElement).value, 10) || 0;

		this.setValue(value);
	};

	handleKeydown = (event: KeyboardEvent) => {
		const key = event.key || event.code;

		const setValue = (value: number) => {
			event.preventDefault();
			this.setValue(value);
		};

		const codes: any = {
			ArrowDown: () => setValue(this.value.now - 1),
			ArrowUp: () => setValue(this.value.now + 1),
			PageDown: () => setValue(this.value.now - 5),
			PageUp: () => setValue(this.value.now + 5),
			Home: () => setValue(this.value.min),
			End: () => setValue(this.value.max),
			default: () => false,
		};

		return (codes[key] || codes.default)();
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
		const current = parseInt(value.toString(), 10);

		this.value.now = clamp(current, this.value.min, this.value.max);
		this.value.text = setText(this.value.now, this.text);

		toggleDisabled(this.$increase, this.value.now, this.value.max);
		toggleDisabled(this.$decrease, this.value.now, this.value.min);

		setAttributes(this.el, {
			'aria-valuenow': this.value.now.toString(),
			'aria-valuetext': this.value.text,
		});

		this.$input!.value = this.value.now.toString();

		if (emit) {
			dispatchEvent(this.el, { value: this.value.now }, 'change');
		}
	}
}
