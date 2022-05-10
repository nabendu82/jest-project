let colors = [ 'red', 'green', 'blue', 'brown' ];
beforeEach(() => colors = [ 'red', 'green', 'blue', 'brown' ]);

describe('colors array', () => {
	it('should add color to end of array', () => {
		colors.push('magenta');
		expect(colors[colors.length - 1]).toBe('magenta');
	});

	it('should add color to beginning of array', () => {
		colors.unshift('yellow');
		expect(colors[0]).toBe('yellow');
	});

	it('should have initial length of 4', () => {
		expect(colors.length).toBe(4);
	});
});
