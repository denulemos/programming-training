const sumRecursion = require('../ejer89.js');

test("sumRecursion should be defined", () => {
    expect(sumRecursion(5,5)).toBeDefined();
});

test("sumRecursion should be 25", () => {
    expect(sumRecursion(5,5)).toEqual(25);
});





