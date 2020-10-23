import { ARROW_DOWN, ARROW_UP, PAGE_DOWN, PAGE_UP, HOME, END } from '@19h47/keycode';
import clamp from '@19h47/clamp';

import { EventEmitter } from 'events';

const toggleDisabled = (target, current, value) => {
	if (current === value) {
		return target.setAttribute('disabled', true);
	}

	return target.removeAttribute('disabled');
};

const setAttributes = (element, attributes) => {
	Object.keys(attributes).map(key => element.setAttribute(key, attributes[key]));
};

const setText = (now, append) => {
	if (append) {
		return `${now} ${1 >= now ? append.single : append.plural}`;
	}

	return now;
};

export default class SpinButton extends EventEmitter {
	constructor(element, options = {}) {
		super();

		this.rootElement = element;

		this.$input = this.rootElement.querySelector('input[type="text"]');

		this.$increase = this.rootElement.querySelector('.js-increase');
		this.$decrease = this.rootElement.querySelector('.js-decrease');

		const now = JSON.parse(this.rootElement.getAttribute('aria-valuenow'));

		this.text =
			JSON.parse(this.rootElement.getAttribute('data-spinbutton-text')) ||
			options.text ||
			false;

		this.value = {
			min: JSON.parse(this.rootElement.getAttribute('aria-valuemin')),
			max: JSON.parse(this.rootElement.getAttribute('aria-valuemax')),
			now,
			text: setText(now, this.text),
		};

		// Bind.
		this.handleKeydown = this.handleKeydown.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}

	init() {
		this.setValue(this.value.now);
		this.initEvents();
	}

	initEvents() {
		this.rootElement.addEventListener('keydown', this.handleKeydown);
		this.$increase.addEventListener('click', () => this.handleClick(this.value.now + 1));
		this.$decrease.addEventListener('click', () => this.handleClick(this.value.now - 1));
		this.$input.addEventListener('input', this.handleInput);
	}

	handleClick = value => this.setValue(value);

	handleInput({ target }) {
		const value = parseInt(target.value, 10) || 0;

		this.setValue(value);
	}

	handleKeydown(event) {
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

	setMin(value) {
		this.value.min = parseInt(value, 10);
		this.rootElement.setAttribute('aria-valuemin', value);
		this.setValue(this.value.now);
	}

	setMax(value) {
		this.value.max = parseInt(value, 10);
		this.rootElement.setAttribute('aria-valuemax', value);
		this.setValue(this.value.now);
	}

	setValue(value) {
		const current = parseInt(value, 10);

		this.value.now = clamp(current, this.value.min, this.value.max);
		this.value.text = setText(this.value.now, this.text);

		toggleDisabled(this.$increase, this.value.now, this.value.max);
		toggleDisabled(this.$decrease, this.value.now, this.value.min);

		setAttributes(this.rootElement, {
			'aria-valuenow': this.value.now,
			'aria-valuetext': this.value.text,
		});

		this.$input.value = this.value.now;

		this.emit('SpinButton.change', this.value.now);
	}
}
