const cleanArrayFromRepeatNumbersAndStrings = require("../ejer30");

const expectedResult = [ 1, 2, 3 ];

test("cleanArrayFromRepeatNumbersAndStrings should be defined", () => {
    expect(cleanArrayFromRepeatNumbersAndStrings([1,1,1,1,2,2,2,'denu',3,3,3])).toBeDefined()
});
test("cleanArrayFromRepeatNumbersAndStrings should return expectedResult", () => {
    expect(cleanArrayFromRepeatNumbersAndStrings([1,1,1,1,2,2,2,'denu',3,3,3])).toEqual(expectedResult)
});

