const createNewArrayOfFirstAndLast = require("../ejer35");

const expectedResult = [1,5];

test("createNewArrayOfFirstAndLast should be defined", () => {
    expect(createNewArrayOfFirstAndLast([1, 2, 3, 4, 5])).toBeDefined();
});

test("createNewArrayOfFirstAndLast should return expected", () => {
    expect(createNewArrayOfFirstAndLast([1, 2, 3, 4, 5])).toEqual(expectedResult)
});
