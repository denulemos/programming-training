const maxAndMin = require("../ejer40");

const expectedResult = "El menor es 1 y el mayor es 9";

test("maxAndMin should be defined", () => {
    expect(maxAndMin([1,5,7,9,1,2,3])).toBeDefined();
});

test("maxAndMin should return expected", () => {
    expect(maxAndMin([1,5,7,9,1,2,3])).toEqual(expectedResult)
});
