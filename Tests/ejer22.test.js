const numberComparison = require("../ejer22");

const expectedResult = "5 is equal to 5";
const expectedResultSecond = "5 is less than 10";

test("numberComparison should be defined", () => {
    expect(numberComparison(5, 5)).toBeDefined();
});

test("numberComparison should return expected results", () => {
    expect(numberComparison(5, 5)).toEqual(expectedResult)
    expect(numberComparison(5, 10)).toEqual(expectedResultSecond)
});

