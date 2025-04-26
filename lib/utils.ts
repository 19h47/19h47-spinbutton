/**
 * Clamps a number between a minimum and maximum value.
 *
 * @param value - The number to clamp.
 * @param min - The minimum value to clamp to.
 * @param max - The maximum value to clamp to.
 *
 * @example
 * ```typescript
 * clamp(10, 1, 5); // Returns 5
 * clamp(-1, 0, 10); // Returns 0
 * clamp(7, 3, 9); // Returns 7
 * ```
 *
 * @returns The clamped value.
 */
const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);


/**
 * A robust throttle function that ensures a function is executed at most once in a specified time interval.
 *
 * @param func - The function to throttle.
 * @param limit - The number of milliseconds to wait before allowing another execution.
 * @returns A throttled function.
 */
const throttle = (func: (...args: any[]) => void, limit: number) => {
	let lastCall = 0;
	let timeout: number | null = null;

	return (...args: any[]) => {
		const now = Date.now();

		if (now - lastCall >= limit) {
			lastCall = now;
			func(...args);
		} else if (!timeout) {
			timeout = window.setTimeout(() => {
				lastCall = Date.now();
				timeout = null;
				func(...args);
			}, limit - (now - lastCall));
		}
	};
};

export { clamp, throttle };
