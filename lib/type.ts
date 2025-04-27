
/**
 * Represents a text object with singular and plural forms.
 */
export interface Text {
	single: string;
	plural: string;
}

/**
 * Interface representing the options for the spin button.
 */
export interface Options {
	text?: Text;
	step?: number;
	delay?: number;
}

/**
 * Represents a value with a minimum, maximum, current value, and a textual representation.
 *
 * @interface Value
 * @property {number} min - The minimum value.
 * @property {number} max - The maximum value.
 * @property {number} now - The current value.
 * @property {string} text - The textual representation of the value.
 */
export interface Value {
	min: number | false;
	max: number | false;
	now: number;
	text: string;
}
