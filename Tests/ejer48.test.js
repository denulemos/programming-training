const onlyOneLetter = require("../ejer48");

const expectedResult = "s,a,j,r, s";

test("onlyOneLetter should be defined", () => {
    expect(onlyOneLetter('denu es la mejor del mundo')).toBeDefined();
});

test("onlyOneLetter should return expected", () => {
    expect(onlyOneLetter('denu es la mejor del mundo')).toEqual(expectedResult)
});
