/**
 * Clamp
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 */
const clamp = (value: number, min: number, max: number) =>
	Math.max(Math.min(value, Math.max(min, max)), Math.min(min, max));

export default clamp;
