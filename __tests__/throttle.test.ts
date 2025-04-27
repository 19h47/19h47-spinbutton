import { throttle } from '../lib/utils';

describe('throttle', () => {
	let mockFunction: jest.Mock;
	let throttledFunction: (...args: any[]) => void;

	beforeEach(() => {
		mockFunction = jest.fn();
		throttledFunction = throttle(mockFunction, 1000);
	});

	it('should call the function immediately on the first call', () => {
		throttledFunction();
		expect(mockFunction).toHaveBeenCalledTimes(1);
	});

	it('should not call the function again until the limit has passed', () => {
		throttledFunction();
		jest.advanceTimersByTime(500);
		throttledFunction();
		expect(mockFunction).toHaveBeenCalledTimes(1);
		jest.advanceTimersByTime(500);
		throttledFunction();
		expect(mockFunction).toHaveBeenCalledTimes(2);
	});

	it('should call the function at most once in the specified time interval', () => {
		for (let i = 0; i < 10; i++) {
			throttledFunction();
		}
		expect(mockFunction).toHaveBeenCalledTimes(1);
		jest.advanceTimersByTime(1000);
		throttledFunction();
		expect(mockFunction).toHaveBeenCalledTimes(2);
	});
});

jest.useFakeTimers();
