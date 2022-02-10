const getAverage = require("../ejer43");

const expectedResult = 4;

test("getAverage should be defined", () => {
    expect(getAverage([1,5,7,3,4])).toBeDefined();
});

test("getAverage should return expected", () => {
    expect(getAverage([1,5,7,3,4])).toEqual(expectedResult)
});
