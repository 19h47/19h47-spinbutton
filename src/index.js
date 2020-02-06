import {
	ARROW_DOWN,
	ARROW_UP,
	PAGE_DOWN,
	PAGE_UP,
	HOME,
	END,
} from '@19h47/keycode';

export default class SpinButton {
	constructor(element) {
		this.rootElement = element;

		this.$input = this.rootElement.querySelector('input[type="text"]');
		this.$increase = this.rootElement.querySelector('.js-increase');
		this.$decrease = this.rootElement.querySelector('.js-decrease');

		this.value = {
			min: JSON.parse(this.rootElement.getAttribute('aria-valuemin')) || 0,
			max: JSON.parse(this.rootElement.getAttribute('aria-valuemax')) || 10,
			now: JSON.parse(this.rootElement.getAttribute('aria-valuenow')) || 5,
			text: '',
		};

		console.log(this.value);

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
			console.log('setValue');

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

		console.log(current);

		this.$input.setAttribute('aria-valuenow', this.value.now);
		this.$input.setAttribute('aria-valuetext', this.value.text);
		this.$input.setAttribute('value', this.value.now);
		this.$input.value = this.value.now;
	}
}
