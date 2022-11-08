const capitalize = require('./task-4/capitalize');

test('"this is a test" should return "This is a test" ', () => {
    
    expect(capitalize('this is a test')).toBe('This is a test');
});