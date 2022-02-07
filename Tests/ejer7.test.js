const getOddNumbers = require("../ejer7");

test("getOddNumbers should be defined", () => {
    expect(getOddNumbers(1, 10)).toBeDefined();
});

test("getOddNumbers should return 5", () => {
    expect(getOddNumbers(1, 10)).toBe(5)
});

test("getOddNumbers should return 50", () => {
    expect(getOddNumbers(1, 100)).toBe(50)
});