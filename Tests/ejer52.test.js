const getHypotenuse = require("../ejer52");

const expectedResult = 12.806248474865697;

test("getHypotenuse should be defined", () => {
    expect(getHypotenuse(10, 8)).toBeDefined();
});

test("getHypotenuse should return expected", () => {
    expect(getHypotenuse(10, 8)).toEqual(expectedResult)
});
