const hasLoop = require("../ejer50");

const expectedResult = 8;

test("hasLoop should be defined", () => {
    expect(hasLoop(66668888999900001111223)).toBeDefined();
});

test("hasLoop should return expected", () => {
    expect(hasLoop(66668888999900001111223)).toEqual(expectedResult)
});
