const repeatMe = require("../ejer14");

const expectedResult = "denu denu ";

test("repeatMe should be defined", () => {
    expect(repeatMe('denu', 2)).toBeDefined();
});

test("repeatMe should return expected", () => {
    expect(repeatMe('denu', 2)).toEqual(expectedResult)
});
