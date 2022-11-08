const stringLength = require('./task-1/stringLength');

test('"Life, the" has a length of 9', () => { 
    expect(stringLength('Life, the')).toBe(9);
});

test('"", should throw an error', () => {
    expect(() => stringLength('')).toThrow('Invalid String!');
});

test('"you are using the wrong JDK!" should throw an error', () => {
    expect(() => stringLength('')).toThrow('Invalid String!');
});