const iterateArrays = require("../ejer54");

const expectedResult = 2;

test("iterateArrays should be defined", () => {
    expect(iterateArrays([1, 2, 3], [1, 2, 3], 31)).toBeDefined();
});

test("iterateArrays should return expected", () => {
    expect(iterateArrays([1, 2, 3], [1, 2, 3], 31)).toEqual(expectedResult)
});

/* El resultado es 2 ya que
31 == 31 No
22 < 31 +1
13 < 31 +1
*/
