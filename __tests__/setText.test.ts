import { localeOf, setText } from '../lib/utils';

describe('setText', () => {
	const forms = { one: 'item', other: 'items' };

	it('uses the one form in English', () => {
		expect(setText(1, forms, 'en')).toBe('1 item');
	});

	it('uses the other form for zero in English', () => {
		expect(setText(0, forms, 'en')).toBe('0 items');
	});

	it('uses the other form for many in English', () => {
		expect(setText(5, forms, 'en')).toBe('5 items');
	});

	it('uses the one form for zero in French', () => {
		expect(setText(0, forms, 'fr')).toBe('0 item');
	});

	it('falls back to other when the selected category has no form', () => {
		expect(setText(2, { other: 'items' }, 'en')).toBe('2 items');
	});

	it('returns the number alone when no forms are given', () => {
		expect(setText(3)).toBe('3');
	});
});

describe('localeOf', () => {
	it('reads lang from the closest ancestor', () => {
		document.body.innerHTML = '<div lang="fr"><div id="el"></div></div>';
		expect(localeOf(document.getElementById('el')!)).toBe('fr');
	});
});
