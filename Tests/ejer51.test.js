const getOddAndEvenNumbers = require("../ejer51");

const expectedResult = "Pares 2,4,6,8,10, Impares 1,3,5,7,9";

test("getOddAndEvenNumbers should be defined", () => {
    expect(getOddAndEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBeDefined();
});

test("getOddAndEvenNumbers should return expected", () => {
    expect(getOddAndEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(expectedResult)
});
