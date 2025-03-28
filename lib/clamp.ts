/**
 * Clamps a number between a minimum and maximum value.
 *
 * @param value - The number to clamp.
 * @param min - The minimum value to clamp to.
 * @param max - The maximum value to clamp to.
 *
 * @returns The clamped value.
 */
const clamp = (value: number, min: number, max: number) =>
	Math.min(Math.max(value, min), max);

export default clamp;
