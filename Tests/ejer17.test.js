const printNumbers = require("../ejer17");

const expectedResult = "1 2 Deno 4 Lemon Deno ";

test("printNumbers should be defined", () => {
    expect(printNumbers(6)).toBeDefined();
});

test("printNumbers should return expected", () => {
    expect(printNumbers(6)).toEqual(expectedResult)
});
