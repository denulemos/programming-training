const getTypeOfAngle = require("../ejer31");

const expectedResult = "Angulo Recto";

test("getTypeOfAngle should be defined", () => {
    expect(getTypeOfAngle(90)).toBeDefined()
});
test("getTypeOfAngle should return expectedResult", () => {
    expect(getTypeOfAngle(90)).toEqual(expectedResult)
});

