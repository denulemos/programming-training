const {getLengthOfLast, getLengthOfLastArray} = require("../ejer55");

const expectedResult = 5;
const expectedResult2 = 0;

test("getLengthOfLast should be defined", () => {
    expect(getLengthOfLast('Hola mundo')).toBeDefined();
});

test("getLengthOfLastArray should be defined", () => {
    expect(getLengthOfLastArray('Hola mundo')).toBeDefined();
});


test("getLengthOfLast should return expected", () => {
    expect(getLengthOfLast('Hola Mundo')).toEqual(expectedResult)
});

test("getLengthOfLast should return expected, not OK", () => {
    expect(getLengthOfLast('Hola     Mundo      ')).toEqual(expectedResult2)
});

test("getLengthOfLastArray should return expected", () => {
    expect(getLengthOfLastArray('Hola Mundo')).toEqual(expectedResult)
});

test("getLengthOfLastArray should return expected with the correct solution", () => {
    expect(getLengthOfLastArray('Hola     Mundo         ')).toEqual(expectedResult)
});
