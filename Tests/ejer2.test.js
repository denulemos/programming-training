const isPalindromo = require("../ejer2");

test("isPalindromo should be defined", () => {
    expect(isPalindromo('denu')).toBeDefined();
});

test("isPalindromo should return false", () => {
    expect(isPalindromo('denu')).toBe(false)
});

test("isPalindromo should return true", () => {
    expect(isPalindromo('otto')).toBe(true)
});