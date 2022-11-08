const reverseString = require('./task-2/reverseString');

test('"string" should return "gnirts"', () => { 
    expect(reverseString('string')).toBe('gnirts');
});