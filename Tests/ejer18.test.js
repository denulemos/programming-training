const getDivisors = require("../ejer18");

const expectedResult = "1 5 ";

test("getDivisors should be defined", () => {
    expect(getDivisors(5)).toBeDefined();
});

test("printNumbers should return expected", () => {
    expect(getDivisors(5)).toEqual(expectedResult)
});
