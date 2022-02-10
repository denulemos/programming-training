const calculateMetersPerSecond = require("../ejer53");

const expectedResult = 27.77777777777778;

test("calculateMetersPerSecond should be defined", () => {
    expect(calculateMetersPerSecond(100)).toBeDefined();
});

test("calculateMetersPerSecond should return expected", () => {
    expect(calculateMetersPerSecond(100)).toEqual(expectedResult)
});
