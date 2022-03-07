const evaluateInfix = require("../ejer57");

const testCase1 = ["2", "1", "+", "3", "*"];


test("evaluateInfix should be defined", () => {
    expect(evaluateInfix(testCase1)).toBeDefined();
});


test("evaluateInfix should return 9", () => {
    expect(evaluateInfix(testCase1)).toEqual(9)
});


