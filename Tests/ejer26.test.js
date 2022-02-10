const getFibonacciSequence = require("../ejer26");

const expectedResult = `Fibonacci Serie: 0,1,1,2,3 \n Total: 3`;
const expectedResultSecond = `Fibonacci Serie: 0,1,1,2,3,5,8,13,21,34 \n Total: 34`;

test("getFibonacciSequence should be defined", () => {
    expect(getFibonacciSequence(5)).toBeDefined()
});
test("getFibonacciSequence should return expectedResult", () => {
    expect(getFibonacciSequence(5)).toEqual(expectedResult)
});

test("getFibonacciSequence should return expectedResultSecond", () => {
    expect(getFibonacciSequence(10)).toEqual(expectedResultSecond)
});

