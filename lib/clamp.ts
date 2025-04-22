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

export default clamp;
