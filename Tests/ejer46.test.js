const subtringsGenerator = require("../ejer46");

const expectedResult = [ 'de', 'den', 'denu', 'en', 'enu', 'nu' ];

test("subtringsGenerator should be defined", () => {
    expect(subtringsGenerator('denu')).toBeDefined();
});

test("subtringsGenerator should return expected", () => {
    expect(subtringsGenerator('denu')).toEqual(expectedResult)
});
