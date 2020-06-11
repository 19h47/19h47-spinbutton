import { ARROW_DOWN, ARROW_UP, PAGE_DOWN, PAGE_UP, HOME, END } from '@19h47/keycode';

import EventDispatcher from './EventDispatcher';

const toggleDisabled = (target, current, value) => {
	if (current === value) {
		return target.setAttribute('disabled', true);
	}

	return target.removeAttribute('disabled');
};

const setAttributes = (element, attributes) => {
	console.log(element);
	Object.keys(attributes).map(key => element.setAttribute(key, attributes[key]));
};

export default class SpinButton extends EventDispatcher {
	constructor(element) {
		super(['SpinButton.change'], element);

		this.rootElement = element;

		this.$input = this.rootElement.querySelector('input[type="text"]');

		console.log(element);
		console.log(this.$input);

		this.$increase = this.rootElement.querySelector('.js-increase');
		this.$decrease = this.rootElement.querySelector('.js-decrease');

		this.value = {
			min: JSON.parse(this.rootElement.getAttribute('aria-valuemin')),
			max: JSON.parse(this.rootElement.getAttribute('aria-valuemax')),
			now: JSON.parse(this.rootElement.getAttribute('aria-valuenow')),
			text: '',
		};

		// Bind.
		this.onKeyDown = this.onKeyDown.bind(this);
	}

	init() {
		this.setValue(this.value.now);
		this.initEvents();
	}

	initEvents() {
		this.rootElement.addEventListener('keydown', this.onKeyDown);
		this.$increase.addEventListener('click', () => this.setValue(this.value.now + 1));
		this.$decrease.addEventListener('click', () => this.setValue(this.value.now - 1));
		this.$input.addEventListener('input', event => {
			const { target } = event;
			const value = parseInt(target.value, 10) || 0;

			this.setValue(value);
		});
	}

	onKeyDown(event) {
		const key = event.keyCode || event.which;

		const setValue = value => {
			event.preventDefault();
			this.setValue(value);
		};

		const codes = {
			[ARROW_DOWN]: () => setValue(this.value.now - 1),
			[ARROW_UP]: () => setValue(this.value.now + 1),
			[PAGE_DOWN]: () => setValue(this.value.now - 5),
			[PAGE_UP]: () => setValue(this.value.now + 5),
			[HOME]: () => setValue(this.value.min),
			[END]: () => setValue(this.value.max),
			default: () => false,
		};

		return (codes[key] || codes.default)();
	}

	setValue(value) {
		let current = value;

		if (current > this.value.max) {
			current = this.value.max;
		}

		if (current < this.value.min) {
			current = this.value.min;
		}

		this.value.now = current;
		this.value.text = current;

		toggleDisabled(this.$increase, current, this.value.max);
		toggleDisabled(this.$decrease, current, this.value.min);

		console.log(this.$input);

		setAttributes(this.$input, {
			'aria-valuenow': this.value.now,
			'aria-valuetext': this.value.text,
			value: this.value.now,
		});

		this.$input.value = this.value.now;

		this.emit('SpinButton.change', current);
	}
}
