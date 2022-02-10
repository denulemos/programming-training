const calculateTime = require("../ejer27");

const expectedResult = `26 años, 5 meses, 17 dias`;

test("calculateTime should be defined", () => {
    expect(calculateTime(9657)).toBeDefined()
});
test("calculateTime should return expectedResult", () => {
    expect(calculateTime(9657)).toEqual(expectedResult)
});

