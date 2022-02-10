const getFactorial = require("../ejer28");

const expectedResult = 120;

test("getFactorial should be defined", () => {
    expect(getFactorial(5)).toBeDefined()
});
test("getFactorial should return expectedResult", () => {
    expect(getFactorial(5)).toEqual(expectedResult)
});

