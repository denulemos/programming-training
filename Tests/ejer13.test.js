const subdivideArray = require("../ejer13");

const expectedResult = [[1,2,3], [4,5,6], [7,8,9], [10]];

test("subdivideArray should be defined", () => {
    expect(subdivideArray([1,2,3,4,5,6,7,8,9,10], 3)).toBeDefined();
});

test("subdivideArray should return expected", () => {
    expect(subdivideArray([1,2,3,4,5,6,7,8,9,10], 3)).toEqual(expectedResult)
});
