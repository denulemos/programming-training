const findSum = require('../ejer92.js');

test("findSum should be defined", () => {
    expect(findSum([1,2,3,4,5], 3)).toBeDefined();
});

test("findSum should be true", () => {
    expect(findSum([1,2,3,4,5], 3)).toEqual(true);
});





