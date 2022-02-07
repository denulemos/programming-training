const invertNumber = require("../ejer8");

test("invertNumber should be defined", () => {
    expect(invertNumber(4)).toBeDefined();
});

test("invertNumber should return 321", () => {
    expect(invertNumber(123)).toBe(321)
});

test("invertNumber should return 1", () => {
    expect(invertNumber(1)).toBe(1)
});

test("invertNumber should return -12", () => {
    expect(invertNumber(-21)).toBe(-12)
});