const evaluateCalifications = require("../ejer45");

const expectedResult = "2 aprobados y 1 desaprobados";

test("evaluateCalifications should be defined", () => {
    expect(evaluateCalifications([["Denu", 10], ["Jorge", 6], ["Mafalda", 3]])).toBeDefined();
});

test("evaluateCalifications should return expected", () => {
    expect(evaluateCalifications([["Denu", 10], ["Jorge", 6], ["Mafalda", 3]])).toEqual(expectedResult)
});
