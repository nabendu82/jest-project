const strToArr = require('./strToArr');

describe('String and Array tests', () => {
    const arr = strToArr('Milk', 'Egg', 'Chicken');

    it('String test', () => {
        expect(arr[0]).toMatch(/lk/);
    });
    
    it('Array test', () => {
        expect(arr).toContain('Egg');
    });
})