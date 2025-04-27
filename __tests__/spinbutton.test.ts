import Spinbutton from '../lib/index';

describe('Spinbutton', () => {
	let element: HTMLElement;

	beforeEach(() => {
		document.body.innerHTML = `
			<div role="spinbutton" aria-valuemin="0" aria-valuemax="10" aria-valuenow="5">
				<button class="js-decrease">-</button>
				<input type="text" />
				<button class="js-increase">+</button>
			</div>
		`;
		element = document.querySelector('[role="spinbutton"]')!;
	});

	it('should initialize with the correct value', () => {
		const spinbutton = new Spinbutton(element);
		spinbutton.init();
		expect(spinbutton.value.now).toBe(5);
	});

	it('should increase the value when the increase button is clicked', () => {
		const spinbutton = new Spinbutton(element);
		spinbutton.init();
		const increaseButton = element.querySelector('.js-increase') as HTMLButtonElement;
		increaseButton.click();
		expect(spinbutton.value.now).toBe(6);
	});

	it('should decrease the value when the decrease button is clicked', () => {
		const spinbutton = new Spinbutton(element);
		spinbutton.init();
		const decreaseButton = element.querySelector('.js-decrease') as HTMLButtonElement;
		decreaseButton.click();
		expect(spinbutton.value.now).toBe(4);
	});

	it('should not exceed the maximum value', () => {
		const spinbutton = new Spinbutton(element);
		spinbutton.init();
		const increaseButton = element.querySelector('.js-increase') as HTMLButtonElement;
		for (let i = 0; i < 10; i++) {
			increaseButton.click();
		}
		expect(spinbutton.value.now).toBe(10);
	});

	it('should not go below the minimum value', () => {
		const spinbutton = new Spinbutton(element);
		spinbutton.init();
		const decreaseButton = element.querySelector('.js-decrease') as HTMLButtonElement;
		for (let i = 0; i < 10; i++) {
			decreaseButton.click();
		}
		expect(spinbutton.value.now).toBe(0);
	});

	it('should update the live region with the current value', () => {
		const spinbutton = new Spinbutton(element);
		spinbutton.init();
		const liveRegion = element.querySelector('[aria-live="polite"]') as HTMLDivElement;
		const increaseButton = element.querySelector('.js-increase') as HTMLButtonElement;
		increaseButton.click();
		expect(liveRegion.textContent).toContain('6');
	});

	it('should set the correct aria attributes', () => {
		const spinbutton = new Spinbutton(element);
		spinbutton.init();
		expect(element.getAttribute('aria-valuemin')).toBe('0');
		expect(element.getAttribute('aria-valuemax')).toBe('10');
		expect(element.getAttribute('aria-valuenow')).toBe('5');
	});

	it('should handle custom step values in options', () => {
		const spinbutton = new Spinbutton(element, { step: 2 });
		spinbutton.init();
		const increaseButton = element.querySelector('.js-increase') as HTMLButtonElement;
		increaseButton.click();
		expect(spinbutton.value.now).toBe(7);
	});

	it('should handle custom delay values in options', () => {
		const spinbutton = new Spinbutton(element, { delay: 500 });
		spinbutton.init();
		expect(spinbutton.options.delay).toBe(500);
	});

	it('should handle custom text values in options', () => {
		const spinbutton = new Spinbutton(element, { text: { single: 'Custom Text', plural: 'Custom Texts' } });
		spinbutton.init();
		expect(spinbutton.text).toStrictEqual({ single: 'Custom Text', plural: 'Custom Texts' });
	});

	it('should handle invalid or non-numeric input gracefully', () => {
		const spinbutton = new Spinbutton(element);
		spinbutton.init();

		const input = element.querySelector('input') as HTMLInputElement;
		input.value = 'invalid';
		const event = new Event('input');
		input.dispatchEvent(event);

		expect(spinbutton.value.now).toBe(5); // Reset to the current value
	});

	it('should handle empty input gracefully', () => {
		const spinbutton = new Spinbutton(element);
		spinbutton.init();
		const input = element.querySelector('input') as HTMLInputElement;
		input.value = '';
		const event = new Event('input');
		input.dispatchEvent(event);
		expect(spinbutton.value.now).toBe(5); // Reset to the current value
	});


	it('should handle edge cases for min and max values', () => {
		const spinbutton = new Spinbutton(element);
		spinbutton.init();
		spinbutton.value.min = 5;
		spinbutton.value.max = 5;
		const increaseButton = element.querySelector('.js-increase') as HTMLButtonElement;
		increaseButton.click();
		expect(spinbutton.value.now).toBe(5);
		const decreaseButton = element.querySelector('.js-decrease') as HTMLButtonElement;
		decreaseButton.click();
		expect(spinbutton.value.now).toBe(5);
	});
});
