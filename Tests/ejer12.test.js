const printNumbersInAList = require("../ejer12");

const expectedResult = "--- Del 56 al 0 --- \n- n 56 \n- n 48 \n- n 40 \n- n 32 \n- n 24 \n- n 16 \n- n 8 \n";

test("printNumbersInAList should be defined", () => {
    expect(printNumbersInAList(56)).toBeDefined();
});

test("printNumbersInAList should return expected", () => {
    expect(printNumbersInAList(56)).toEqual(expectedResult)
});
