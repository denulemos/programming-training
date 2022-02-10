const calculator = require("../ejer34");

const expectedResult = `5 + 5 = 10 \n` +
`5 - 5 = 0 \n` +
`5 * 5 = 25 \n` +
`5 / 5 = 1`;

test("calculator should be defined", () => {
    expect(calculator(5,5)).toBeDefined()
});
test("calculator should return expectedResult", () => {
    expect(calculator(5,5)).toEqual(expectedResult)
});

