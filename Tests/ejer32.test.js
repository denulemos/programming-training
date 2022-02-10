const squaredArray = require("../ejer32");

const expectedResult = [ 1, 4, 9, 16, 25 ];

test("squaredArray should be defined", () => {
    expect(squaredArray([1,2,3,4,5,'denu'])).toBeDefined()
});
test("squaredArray should return expectedResult", () => {
    expect(squaredArray([1,2,3,4,5,'denu'])).toEqual(expectedResult)
});

