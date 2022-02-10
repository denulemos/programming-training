const showSquare = require("../ejer38");

const expectedResult = [ 0, 1, 4, 9, 16 ];

test("showSquare should be defined", () => {
    expect(showSquare(5)).toBeDefined();
});

test("showSquare should return expected", () => {
    expect(showSquare(5)).toEqual(expectedResult)
});
