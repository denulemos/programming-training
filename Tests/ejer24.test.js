const isPermutation = require("../ejer24");

test("isPermutation should be defined", () => {
    expect(isPermutation([1, 2, 3, 4, 5], 5)).toBeDefined();
});
test("isPermutation should return true", () => {
    expect(isPermutation([1, 2, 3, 4, 5], 5)).toEqual(true)
});

test("capitalLetter should return false", () => {
    expect(isPermutation([3, 4, 6], 6)).toEqual(false)
});

